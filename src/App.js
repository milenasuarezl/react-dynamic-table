import { useEffect, useState } from 'react';
import Table from './components/Table';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fethData = async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setData(data);
      } catch (error) {
        throw new Error(error)
      }
    }

    /* Using native fetch 
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(err => console.log(err)); */
    fethData();
  }, [])

  const columns = [
    {
      heading: 'Name',
      value: 'name',
    },
    {
      heading: 'Email',
      value:'email'
    }
  ]

  return (
    <div className="App">
      <h1>Dynamic Table</h1>
      <Table data={data} columns={columns} />
    </div>
  );
}

export default App;
