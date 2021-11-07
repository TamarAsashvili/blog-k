import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


function App() {

  const [tasks, setTasks] = useState([
    {
      id: '1',
      text: 'loreendxckmdkmcvmd vdkvmdk',
      day: 'Feb 5th at 2pm',
      reminder: false,

    },
    {
      id: '2',
      text: '222  loreendxckmdkmcvmd vdkvmdk',
      day: 'Feb 3th at 11pm',
      reminder: false,

    },
    {
      id: '3',
      text: '33333333 loreendxckmdkmcvmd vdkvmdk',
      day: 'Feb 11th at 11pm',
      reminder: true,

    },
  ])


  //Delete task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />

    </div>
  );
}

export default App;
