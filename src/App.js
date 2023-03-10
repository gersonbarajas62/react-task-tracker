import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from "react"  

function App() {
  const [showAddTask, setShowAddtask] = useState(false) 
  const [tasks, setTasks] = useState([
    {
      id: 1, 
      text: 'Doctors appointment',
      day: 'feb 5th at 2:30PM',
      reminder:  true,
    },
    {
      id: 2, 
      text: 'GYM',
      day: 'feb 5th at 2:30PM',
      reminder:  true,
    },
    {
      id: 3, 
      text: 'Go visit girl',
      day: 'feb 5th at 2:30PM',
      reminder:  true,
    },
    {
      id: 4, 
      text: 'Smoke',
      day: 'feb 5th at 2:30PM',
      reminder:  true,
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() *
    10000) + 1 
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== 
    id))
  }

    const toggleReminder = (id) => {
      setTasks(Tasks.map((task) => task.id === id
      ? {...task, reminder:!task.reminder
       } : task))

    }

  return (
    <div className="container">
      
      <Header onAdd={() => setShowAddtask
        (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}


      {tasks.length > 0 ? (
        <Tasks tasks={tasks} 
        onDelete={deleteTask} onToggle={toggleReminder}/>) :
        (
          'no Task to show'
        )
        }
      
    </div>
  );
}

export default App;
