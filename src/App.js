import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from "react"

function App() {
  const [task, setTask] = useState([
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

  return (
    <div className="container">
      
      <Header />
      <Tasks tasks={task}/>
    </div>
  );
}

export default App;
