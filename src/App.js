import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
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
      
      <Header />
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
