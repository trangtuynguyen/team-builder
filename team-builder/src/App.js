import React from 'react';
import './App.css';
import {useState} from "react";
import Form from "./components/form";
import Card from "./components/card"


function App() {

  const [member, setMember] = useState([]);



  return (
    <div>
      <Form member={member} setMember={setMember}/>
      {console.log(member)}
    </div>
  );
}

export default App;
