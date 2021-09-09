import React , {useState} from 'react'
import axios from 'axios'
import Search from './Search'
import Collections from './Collections'
import Popup from './Popup';
import './App.css';

function App() {

  const [box,setBox]=useState();
  const [state,setState]=useState([]);
  const [pop,setPop]=useState({});

  const api_url=' http://www.omdbapi.com/?apikey=b53d643a';

  const handleInput=(e)=>{
    let s=e.target.value;
    setBox(s);
  }

  const search=(e)=>{
    if (e.key==="Enter"){
        axios(api_url+"&s="+box).then(({data})=>{
          let r=data.Search;
          console.log(r);
          if (r===undefined){
            alert('Enter a valid movie name...!!!');
            return;
          }
          setState(r);
      });
    }
  }

  const openPopup=id=>{
    axios(api_url+"&i="+id).then(({data})=>{
      let r=data;
      setPop(r);
    });
  }

  const closedPopup=()=>{
    setPop({});
  }

  return (
    <div className="App">
      <header>MovieSpot</header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Collections results={state} openPopup={openPopup}/>
        {(typeof pop.Title!="undefined") ? <Popup pop={pop} closedPopup={closedPopup}/> :false}
      </main>
    </div>
  );
}

export default App;