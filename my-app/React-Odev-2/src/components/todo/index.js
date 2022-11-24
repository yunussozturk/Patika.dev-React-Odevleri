function Todo({text , todos , setTodos , todo}){
    // tıkladığımız id'de ki todo'yu listeden çıkarır, diğerlerini verir
    const deleteHandler  = () =>{
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    // tıklayınca completed true ise false, false ise true yapar
    const completeHandler = () =>{
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item , completed: !item.completed
                }
            }
            return item;
        }))
    }
    // listeye eklenecek değeri class 'larıyla oluştur
    return(
        <li className={`${todo.completed ? "completed" : ""}`}>
            <div className="view">
                <input onClick={completeHandler} className="toggle" type="checkbox" />
                <label onClick={completeHandler}>{text}</label>
                <button onClick={deleteHandler} className="destroy"></button>
            </div>
            
        </li>
    )
}
export default Todo;