import toDoList from "../todolist";

function Form({inputText , setInputText , todos , setTodos , setStatus}){

    // input değişince inputText 'e set et.
    const inputTextHandler = (e) =>{
        setInputText(e.target.value)
    }

    // form'u submit'leyince boş değilse; text, completed, id ile birlikte todos'a ekle
    const onSubmit = (e) =>{
        e.preventDefault();
        if(inputText.trim().length !== 0){
            setTodos([...todos , {text: inputText , completed: false , id: Math.random()}])
            setInputText("");
        }
    }

    return(
    <section className="todoapp">       
	    <header className="header">
            <form onSubmit={onSubmit}>
                <input value={inputText} className="new-todo" placeholder="What needs to be doane?" 
                autoFocus onChange={inputTextHandler} />
            </form>
	    </header>

        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">
                Mark all as complete
            </label>
        </section>
    </section>

    )
}
export default Form;