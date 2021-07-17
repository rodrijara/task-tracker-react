
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

function App() {
  const [showAddForm, setShowAddForm] = useState(true)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'doctors',
      day: '5 Feb 14:30hs',
      reminder: true
    },
    {
      id: 2,
      text: 'vet',
      day: '19 Mar 13:30hs',
      reminder: false
    },
    {
      id: 3,
      text: 'supermarket',
      day: '13 Feb 12:00hs',
      reminder: true
    },

  ])

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

  // show Add form



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
