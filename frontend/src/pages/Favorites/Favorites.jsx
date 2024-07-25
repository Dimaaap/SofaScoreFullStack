import "./Favorites.css";
import TopHeader from "../../components/TopHeader/TopHeader";
import BottomHeader from "../../components/BottomHeader/BottomHeader";
import NotificationSettings from "../../components/NotificationSettings/NotificationSettings";
import SubscribeEditor from "../../components/SubscribeEditor/SubscribeEditor";

const Favorites = () => {
  return (
    <div id="favorites-page">
      <TopHeader />
      <BottomHeader />
      <div className="favorites-container">
        <div className="editor-section">
            <div className="section-block">
                <NotificationSettings />
            </div>
            <div className="section-block">
                <SubscribeEditor />
            </div>
        </div>
        <div className="selected-section">
            Right Section
        </div>
      </div>
    </div>
  )
}

export default Favorites
