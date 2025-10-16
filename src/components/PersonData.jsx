import { useState } from "react";
export default function PersonDAta() {
  const [personData, setPersonData] = useState({
    name: "",
    email: "",
    password: "",
    isStudent: false,
    gender: "",
    info:'',
  });
  return (
    <>
      <h1>PersonDAta</h1>
      <form onSubmit={(e)=>{
        e.preventDefault();
        console.log(personData);    
      }}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" value={personData.name} onChange={(e)=>{setPersonData({...personData,name:e.target.value})}}  />
        <hr />
        <label htmlFor="email">email</label>
        <input type="text" id="email" value={personData.email} onChange={(e)=>{setPersonData({...personData,email:e.target.value})}} />
        <hr />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" value={personData.password} onChange={(e)=>{setPersonData({...personData,password:e.target.value})}} />
        <hr /> 
        <label htmlFor="student">Are you student</label>
        <input   type='checkbox'id="name" value={personData.isStudent} onChange={(e)=>{setPersonData({...personData,isStudent:e.target.checked})}} />
        <hr /> 
        <label htmlFor="gender">Gender</label>
        <select id="gender" value={personData.gender}  onChange={(e)=>{setPersonData({...personData,gender:e.target.value})}}>
            <option >Male</option>
            <option >female</option>
        </select>
        <hr />
        <label htmlFor="inof">Tell us about yourself</label>
        <textarea  id="info" value={personData.info} onChange={(e)=>{setPersonData({...personData,info:e.target.value})}}/>
        <hr />
        <button>Save</button>
      </form>
    </>
  );
}
