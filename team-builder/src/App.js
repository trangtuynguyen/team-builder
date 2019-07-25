import React from 'react';
import './App.css';
import {useState} from "react";
import Form from "./components/form";
import Card from "./components/card"


function App() {

  const [member, setMember] = useState([])
  const [memberToEdit, setMemberToEdit] = useState(null)



  return (
    <div>
      <Form member={member} setMember={setMember} memberToEdit={memberToEdit}/>
      {/* {console.log(member)} */}
      {member.map((mem, index) => 
        <div>
          <Card 
          key={mem.index}
          name={mem.name}
          email={mem.email}
          role={mem.role}
          />
          <button value ={mem} onClick={()=> setMemberToEdit(mem)}>Edit</button>
        </div>
        )}
      {/* {console.log(memberToEdit)} */}
    </div>
  );
}

export default App;
