import {useState} from "react"

function App() {
  const [items, setItems] = useState([])
  const [text, setText] = useState("")

  const addItem = (toDo) => {
    const todo = {
      id: Math.random(),
      todo: toDo
    }
    if (!todo.todo){
      return
    } else {
      setItems([...items, todo])
    setText("")
    }
  }

  const deleteItem = (id) => {
    setItems(prevItems=>{
      return prevItems.filter(item=>{
        return item.id !== id
      })
    })
  }

 return (
  <div className="App">
  <div className="main-container">
  <h1>Todo App</h1>
    <input type="text" value={text} placeholder="Add Item" onChange={(e)=>setText(e.target.value)} />
    <button className="input-button" onClick={()=>addItem(text)}>+</button>
    <ul>
      {items.map(item=>(
        <li key={item.id} id={item.id}>{item.todo}
        <button onClick={()=>deleteItem(item.id)}>-</button>
        </li>
      ))}
    </ul>
  </div>
  </div>
 )
}

export default App;
