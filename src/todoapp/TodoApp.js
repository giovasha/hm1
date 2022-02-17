import classNames from "classnames";
import { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    id: 1,
    title: 'lorem ipsum 11',
    completed: false,
  },
  {
    id: 2,
    title: 'lorem ipsum 22',
    completed: false,
  },
  {
    id: 3,
    title: 'lorem ipsum 33',
    completed: true,
  },
  {
    id: 4,
    title: 'lorem ipsum 44',
    completed: true,
  },
];

function TodoApp() {
  const [todos, setTodos] = useState(ITEMS);
  const [value, setValue] = useState('');
  const [removed, setRemoved] = useState(0)
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    const items = localStorage.getItem('items');
    if (items) {
      setTodos(JSON.parse(items));
    }
  }, [])
  function crossed(item){

  if(item.completed){
    setRemoved(removed+1)
  }
  else{
    setRemoved(removed-1)
  }
 
  

}
  function Remove(id){
    const newTodos = todos.filter((item)=> item.id !==id)
    setTodos(newTodos)
    console.log(todos.length)
  }


  function onItemChange(clickedItem) {
    const newValue = todos.map(item => {
      if (item.id === clickedItem.id) {
        item.completed = !item.completed;
      }
      return item;
    })
    setTodos(newValue);
  }

  function onAddNewItem(e) {
    e.preventDefault();
    const newItems = [
      { 
        id: Date.now(),
        title: value,
        completed: false,
      },
      ...todos,
    ]
    setTodos(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
    setValue('');
  }

  return <div>

    <div style={{padding: '20px'}}>
      <form action="" onSubmit={onAddNewItem}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          ref={inputRef}
        />
      </form>
    </div>

    <ul>
      {
        todos.map(item => (
          <li key={item.id} className={classNames({completed: item.completed})}>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => {onItemChange(item); crossed(item)}}
            />
            {item.title}
            <button type="button" onClick={()=> Remove(item.id)}>Delete</button>
          </li>
        ))
      }
    </ul>
    <h1>Number of items:{todos.length}</h1>
    <h1>Number of items crossed:{removed} </h1>
    
  </div>
}

export default TodoApp;