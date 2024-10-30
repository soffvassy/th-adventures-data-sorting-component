import { useState } from 'react'
import './App.css'
import data from './data.json'

function App() {
  const datadrop=data;
  const [searchValue, setSearchValue] = useState('');
  const [statusValue, setStatusValue] = useState('');
  const [view, setView] = useState('grid');
  const Item = ({title, description, color, statuss}) => {
    
    return(
      <div className="container">
        <div className="container-inner">
        <div style={{backgroundColor: color}}></div> 
        <h2>{title}</h2>
        <p>{description}</p>
        <span className={statuss=="completed" ? "green" : statuss=="in progress" ? "yellow" : "grey"}>{statuss}</span>
      </div>
      </div>
    )
  }

  return (
    <>
    <h1>Data Sorting Component</h1>
    <div className={view + " component"}>
      <input className="search"
      type="text"
      placeholder='Search'
      value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)}
      />
      <button className={`view ${view==="grid" ? "active" : ""}`}  value="grid" onClick={(e)=>setView(e.target.value.toLowerCase())}>Grid</button>
      <button className={`view ${view==="list" ? "active" : ""}`}  value="list" onClick={(e)=>setView(e.target.value.toLowerCase())}>List</button>
      <div className="statuses">
        <button className={statusValue==="completed" ? "active" : ""} value="completed" onClick={(e)=>setStatusValue(e.target.value)}>completed</button>
        <button className={statusValue==="in progress" ? "active" : ""} value="in progress" onClick={(e)=>setStatusValue(e.target.value)}>in progress</button>
        <button className={statusValue==="not started" ? "active" : ""} value="not started" onClick={(e)=>setStatusValue(e.target.value)}>not started</button>
        <button value="" onClick={(e)=>setStatusValue("")}>Clear</button>
        </div>
      <div className="wrap-container">
      {datadrop
      .filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()) || item.description.toLowerCase().includes(searchValue.toLowerCase()))
      .filter(item=>item.status.includes(statusValue))
      .map((item) => (
        <Item 
          key={item.title}
          title={item.title}
          color={item.color}
          description={item.description}
          statuss={item.status}
        />
      ))}
      </div>
      </div>
    </>
  )
}

export default App
