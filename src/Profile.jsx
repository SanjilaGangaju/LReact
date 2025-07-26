import React, { useState } from 'react'

const Profile = () => {
    const [user, setUser] = useState({name:'', age: ''});
    const handleInputChange= e =>{
        const {name, value}=e.target;

        setUser((prevUser)=>({...prevUser, [name]: value,}))
    }
  return (
    <>
    <div>
        <label>Name: 
            <input type="text" name="name" value={user.name} placeholder="Enter your age" onChange={handleInputChange}></input>
        </label>
        <label>Age:
            <input type="number" name="age" value={user.age} placeholder='Enter your name' onChange={handleInputChange}></input>
        </label>
     
      
      
    </div>
    <p>{user.name}</p>
    <p>{user.age}</p>
    </>
  )
}

export default Profile
