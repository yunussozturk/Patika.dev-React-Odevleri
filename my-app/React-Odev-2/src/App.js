import {useState , useEffect} from 'react';
import './App.css';
import Form from './components/form';
import Todolist from './components/todolist';
import Filter from './components/filter';


function App(){
  //input'a girilen değerleri kaydetmek için oluşturuldu
  const [inputText , setInputText] = useState("")
  const [ todos , setTodos ] = useState([])

  // filter için tıklanan yerin ismi için status, filtrelenmiş yeni dizileri kaydetmek için filtered oluşturuldu
  const [status , setStatus] = useState("all")
  const [filteredTodos , setFilteredTodos] = useState([]);

  useEffect(() =>{
    getLocalTodos();
  } , [])

  // status değeri todos değeri değişince filterHandler ve saveLocalTodos fonksiyonları çalıştırıldı
  useEffect(() => {
    filterHandler(todos)
    saveLocalTodos();
  }, [todos , status])

  // status'un aldığı değere göre filtreleme işlemleri yapıldı
  const filterHandler = () => {
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo) => todo.completed === false))
          break;
          case "clearcompleted":
            setTodos(todos.filter((todo) => todo.completed === false))  // completed olanları silme işlemi
            default:
              setFilteredTodos(todos)
              break;
    }
  } 

  // todos dizisi localStorage' e set edildi
  const saveLocalTodos = () => {
    localStorage.setItem("todos" , JSON.stringify(todos))
  }

  // todos dizisi dolu ise todos içine parse edildi
  const getLocalTodos = () => {
    if(localStorage.getItem("todos") === null){
      localStorage.setItem("todos" , JSON.stringify([]))
    }
    else{
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }

  return(
    <div className='App'>
      <section className='todoapp'>
        <header className='header'>
          <h1>
            todos
          </h1>
        </header>
      </section>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} setStatus={setStatus} />		
      <Todolist todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />								
      <Filter todos={todos} setStatus={setStatus} />
    </div>
  )
}
export default App;