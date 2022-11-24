import Todo from '../todo';

// ul içinde li'leri oluşturur
function toDoList({todos , setTodos , filteredTodos}){
    return(
        <section className="todoapp yukariAl">
            <section className="main">
                <ul className="todo-list">
      
                    {filteredTodos.map((todo) => (
                        <Todo
                        text={todo.text}
                        key={todo.id}
                        todos={todos}
                        setTodos={setTodos}
                        todo={todo}
                        />

                        ))
                    }
                </ul>
            </section>
        </section>
    )
}
export default toDoList;