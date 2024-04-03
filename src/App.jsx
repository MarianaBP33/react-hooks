import { useState,useReducer } from "react";


//USE STATE
function NameList() {
  const [list, setList] = useState(["Jack", "Jill", "John"]);
  const [name, setName] = useState('');

  const onAddName = () => {
    setList([...list, name]);
    setName("");
  };

  return (
    <div>
      <ul>
        {list.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onAddName}>Add Name</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);

  function addOne() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      <button onClick={addOne}>Count = {count}</button>
    </div>
  );
}

//USE REDUCER
const numbers = [10,20,30];
let total = 0;
for (const n of numbers) {
  total += n;
}
total;
numbers.reduce((cv, n) => cv + n, 0);

function UserForm() {
  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }), {
    first: "",
    last: "",
  });

  return (
    <div>
      <input type="text" value={state.first} onChange={(e)=>dispatch({first: e.target.value})}/>
      <input type="text" value={state.last} onChange={(e) => dispatch({last: e.target.value })} />
      <div>First: {state.first } </div>
      <div>Last: { state.last}</div>
    </div>
  )
}
function NamesList() {
   const [state,dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_NAME":
        return { ...state, name: action.payload };
      case "ADD_NAME":
        return { names:[...state.names, state.name],name:"" };
    }

  }, {
    names: [],
    name: ''
   });
  return (
    <div>
      <div>
        {state.names.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
      <input type="text" value={state.name} onChange={e => dispatch({type:"SET_NAME", payload: e.target.value})}></input>
      <button onClick={() => dispatch({ type: "ADD_NAME" })}>Add Name</button>
    </div>
  );
  
}

//USE MEMO and CALLBACK

function Memo() {
  const [numbers] = useState([10, 20, 30]);
  const total = numbers.reduce((acc, n) => acc + n, 0);
  return (
    <div>
      <h3>Total: {total}</h3>
    </div>
  );
}


function App() {
 
  return (
    <div>
      <Memo />
      <h3>UseReducer</h3>
      <NamesList />
      <UserForm />
      <h3>UseState</h3>
      <Counter />
      <NameList />
    </div>
  );
}

export default App;