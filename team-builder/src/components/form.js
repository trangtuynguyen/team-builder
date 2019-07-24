import React from "react";
import {useState} from "react";

function Form({member, setMember}){

    //use an OBJECT to track multiple fields

    const [user, setUser] = useState({name:"", email:"", role:""});
    


    function handleChange(event){

        const updatedUser = { ...user, [event.target.name]:event.target.value};
        setUser(updatedUser);

    }

    function handleSubmit(event){
        event.preventDefault();
        setMember([...member, user]);
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Sign Up for Your Role</legend>
                <div className = "form-item">
                    <label>Name</label>
                    <input 
                        type="text"
                        name="name"
                        className="form"
                        placeholder="Enter your full name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </div>
                <div className = "form-item">
                    <label>Email</label>
                    <input 
                        type="text"
                        name="email"
                        className="form"
                        placeholder="Enter your email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </div>
                <div className = "form-item">
                    <label>Role</label>
                    <input 
                        type="text"
                        name="role"
                        className="form"
                        placeholder="Enter your roll"
                        value={user.role}
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;