import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
import "./AddElement.css";

const AddElement = ({ additionalItem }) => {
  return (
    <div className="add-item-element">
        <p>
            <b>{additionalItem}</b>
        </p>
        <div className="additional-zone">
            <div className="add-icon">
                <IoAddCircleOutline size={30} color="hsl(233, 90.5%, 53.8%)" />
            </div>
            <div className="add-title">
                {`Додати 
                ${additionalItem}`}
            </div>
        </div>
    </div>
  )
}

export default AddElement
