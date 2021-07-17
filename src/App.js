
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddForm, setShowAddForm] = useState(true)
  const [tasks, setTasks] = useState([])
  
  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? {...task, reminder: !task.reminder} : task
      )
    )
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000)
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  } 

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddForm(!showAddForm)} showAdd={showAddForm}/>

      {showAddForm && <AddTask onAdd={addTask}/>}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : 'No tasks to show'}
    </div>
  );
}


export default App;
