import './App.css';
import DisplayTasks from './components/DisplayTasks';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="App">
      <Tasks />
      <DisplayTasks />
    </div>
  );
}

export default App;
