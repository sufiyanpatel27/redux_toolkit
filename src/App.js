import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className="bg-gray-200 h-screen flex flex-col justify-start items-center">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
