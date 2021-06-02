function Todo({todo,index,remove}) {
    const handle = ()=>{
      remove(index);
    }
  
    return (
        <div 
          className="todo" 
          onClick={handle}
        >
          {todo.text} 
          <span>&#9986;</span>
        </div>
    );
  }