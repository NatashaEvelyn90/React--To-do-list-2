import ToDoList from "../ToDoList/ToDoList"
import list from "../toDoListData (1)"

function Body() {

    const itemList = list.map(
        (currentItem) => {
            return <ToDoList 
            itemName={currentItem.name} 
            itemDescription={currentItem.description} 
            itemDue= {currentItem.timeDue} 
            itemCompleted= {currentItem.done} />
        }
    )

    return(
        <section role="main">
            <div className="row justify-content-around">
                {itemList}
            </div>
        </section>
    )
}

export default Body