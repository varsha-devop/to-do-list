function App(){
    const [todos, setTodos] = React.useState([
      {
        text: "learn react and Practice More",
        isCompleted: false,
      },
      {
        text: "meet friend for discussion",
        isCompleted: false,
      },
      {
        text: "build apps",
        isCompleted: false,
      } 
      
      
    ]);
   
    const addTodo = text => {
      const newTodos = [...todos,{text:text, isCompleted: false}];
      setTodos(newTodos);
    };
  
    const removeTodo = index => {
      const temp = [...todos];
      temp.splice(index, 1);
      setTodos(temp);
    };
  
    
    return(
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, i) => (
            <Todo 
              remove={removeTodo}
              index={i}
              key={i}
              todo={todo}
            />
          ))}
          <TodoForm 
            addTodo={addTodo}
          />
        </div>
      </div>);
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById('root')
  );