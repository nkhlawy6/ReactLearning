import { use, useState } from "react";
export default function PersonDAta() {
  const [personData, setPersonData] = useState({
    id:0,
    name: "",
    email: "",
    password: "",
    isStudent: false,
    gender: "",
    info: "",
  });
// gender don't work there's errorrr 
  const [personDatas, setPersonDatas] = useState([]);

let nextId=0;
  let personDataList = personDatas.map((person) => {
    nextId++
    return (
      <div key={nextId}>
        <h2>{person.name}</h2>
        <span>{person.email}</span><hr />
        <span>{person.isStudent?'You are student':'you are not student'}</span><hr />
        <span>{person.gender=='male'?`welcom to you Mr:${person.name}`:`welcome to you Mrs: ${person.name}`}</span><hr />
        <span>{person.info}</span><hr />
      </div>
    );
    
  });

  return (
    <>
      <h1>PersonDAta</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(personData);
          setPersonDatas([...personDatas, personData]);
          console.log(personDatas);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={personData.name}
          onChange={(e) => {
            setPersonData({ ...personData, name: e.target.value });
          }}
        />
        <hr />
        <label htmlFor="email">email</label>
        <input
          type="text"
          id="email"
          value={personData.email}
          onChange={(e) => {
            setPersonData({ ...personData, email: e.target.value });
          }}
        />
        <hr />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={personData.password}
          onChange={(e) => {
            setPersonData({ ...personData, password: e.target.value });
          }}
        />
        <hr />
        <label htmlFor="student">Are you student</label>
        <input
          type="checkbox"
          id="student"
          value={personData.isStudent}
          onChange={(e) => {
            setPersonData({ ...personData, isStudent: e.target.checked });
          }}
        />
        <hr />
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          value={personData.gender}
          onChange={(e) => {
            setPersonData({ ...personData,gender:e.target.value});
          }}
        >
          <option>male</option>
          <option>female</option>
        </select>
        <hr />
        <label htmlFor="inof">Tell us about yourself</label>
        <textarea
          id="info"
          value={personData.info}
          onChange={(e) => {
            setPersonData({ ...personData, info: e.target.value });
          }}
        />
        <hr />
        <button>Save</button>
      </form>

      <div
        style={{
          width: "300px",
          minHeight: "300px",
          backgroundColor: "gray",
          margin: "30px",
          padding: "30px",
          borderRadius: "4px",
        }}
      >
        {personDataList}
      </div>
    </>
  );


}
