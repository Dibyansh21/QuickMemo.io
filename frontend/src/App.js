import './App.css';
import Header from './components/header/header';
import AddKeeper from './components/addKeeper/addKeeper';
import ShowKeeper from './components/showkeeper/showkeeper';
import { useState, useEffect } from 'react';
import axios from "axios"



function App() {

  const [keeperlist, setKeeperlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/getAll')
      .then(res => {
        setKeeperlist(res.data); // Update keeperlist with the data received from the server
      })
      .catch(err => {
        console.error(err);
      });
  }, [])

  return (
    <div className="App">
       <Header />
       <AddKeeper keeperlist={keeperlist} setKeeperlist={setKeeperlist}/>
       <ShowKeeper keeperlist={keeperlist} setKeeperlist={setKeeperlist}/>
    </div>
  );
}

export default App;
