import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/Home';
import Task from './components/Task';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>TODO App</h1>
          </header>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/task/:taskId" element={<Task />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;





// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const addTodo = () => {
//     if (inputValue.trim() !== '') {
//       setTodos([...todos, inputValue]);
//       setInputValue('');
//     }
//   };

//   const removeTodo = (index) => {
//     const newTodos = todos.filter((_, i) => i !== index);
//     setTodos(newTodos);
//   };

//   return (
//     <div className="App">
//       <h1>TODO App</h1>
//       <div>
//         <input
//           type="text"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//         />
//         <button onClick={addTodo}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>
//             {todo}
//             <button onClick={() => removeTodo(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;



// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;
