import { useState } from "react"

function ToDoList({itemName, itemDescription, itemDue, itemCompleted}) {
    const [completedItem, setCompletedItem] = useState(itemCompleted)

    function finishItem() {
        setCompletedItem(prevCompleteItem => !prevCompleteItem)
    }

    return (
        <div className={`d-flex flex-row col-4 m-0 stickyItem ${completedItem ? "completed" : ""}`}>
            <span className="mb-5">
                <button onClick={finishItem}>-</button>
                <h3 className="me-3 title">{itemName}</h3>
                <p className="me-2 align-items-center">{itemDue}</p>
                <p>{itemDescription}</p>
            </span>
        </div>
        )
}

export default ToDoList