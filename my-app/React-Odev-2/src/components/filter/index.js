function Footer ({todos , setStatus}){
    // tıklayınca id'yi status'e ekle
    const statusHandler = (e) =>{
        setStatus(e.target.id)
    }

    return(
        <section className="todoapp yukariAl">
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length} </strong>
                    items left
                </span>

                <ul className="filters">
                    <li>
                        <a onClick={statusHandler} id="all" href="#/" className="selected">All</a>
                    </li>
                    <li>
                        <a onClick={statusHandler} id="uncompleted" href="#/">Active</a>   
                    </li>
                    <li>
                        <a onClick={statusHandler} id="completed" href="#/">Completed</a>
                    </li>
                </ul>

                <button id="clearcompleted" onClick={statusHandler} className="clear-completed">
                    Clear completed
                </button>
            </footer>
        </section>
    )
}
export default Footer;
