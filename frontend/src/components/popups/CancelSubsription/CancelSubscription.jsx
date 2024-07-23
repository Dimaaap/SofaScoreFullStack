import { useContext } from "react";
import "./CancelSubscription.css";
import { CancelSubscriptionContext } from "../../../contexts/CancelSubscription";

const CancelSubscription = () => {

    const { setIsCancelPopupOpen } = useContext(CancelSubscriptionContext)
    const GOOGLE_ID = localStorage.getItem("googleId");
    const BACKEND_CHANGE_STATUS_URL = `http://localhost:8000/auth/api/v1/cancel-subscription/${GOOGLE_ID}`;

    const changeStatusRequest = () => {
        const formData = new FormData();
        formData.append("google_id", GOOGLE_ID)
        const fetchData = async() => {
            try {
                const response = await fetch(BACKEND_CHANGE_STATUS_URL, {
                    method: "POST",
                    body: formData
                });
                if(response.ok) {
                    console.log(response.json())
                } else {
                    console.error("Failed to change status", response.status);
                } 
            } catch(error){
                console.error(error)
            }
        }
        fetchData();
        setIsCancelPopupOpen(false);
    }

  return (
    <div className="cancel-subscription-popup-overlay">
        <div className="cancel-subscription-popup">
            <h5 className="modal-title">
                Ви впевнені, що хочете відписатись від 
                нашої розсилки?
            </h5>
            <div className="btns-container">
                <button type="button" className="popup-btn"
                onClick={changeStatusRequest}>
                    Відписатись
                </button>
                <button type="button" className="popup-btn second-btn" 
                onClick={() => setIsCancelPopupOpen(prev => !prev)}>
                    Відхилити
                </button>
            </div>
        </div>
    </div>
  )
}

export default CancelSubscription
