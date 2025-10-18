import Popup from "./Popup";
import { use, useState } from "react";

export default function LoanForm() {
  //states
  const [personDatas,setPersonDatas]=useState([]);
  const [errorMessag,setErrorMessage]=useState(null)
  const [showPopup,setShowPopup]=useState(false)
  const [personData, setPersonData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salary: "",
  });
  let currency = "EG";
  let btnIsDisabled =
    personData.name == "" ||
    personData.age == "" ||
    personData.isEmployee == "" ||
    personData.phoneNumber == "" ||
    personData.salary == "";
  console.log(btnIsDisabled);

  // functions
  let handleSubmit = (e) => {
    const {age,phoneNumber}=personData;
    e.preventDefault();
    setErrorMessage('')
    if(age<18 || age>100 || phoneNumber.length <12 || phoneNumber.length>12){
      setErrorMessage('The form was rejected due to invalid data❌❌')
    }
    setShowPopup(true)
    setPersonDatas([...personDatas,personData]);
    
    console.log(personData);
    console.log(personDatas);
  };
  return (
    <div className={"formPerant"} onClick={()=>{setShowPopup(false)}}>
      <form
        className={"form flex"}
        style={{ flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <h1>Requesting a loan</h1>
        <hr style={{ border: "none" }} />
        <div style={{ margin: "50px" }}>
          <input
            type="text"
            placeholder="Name"
            value={personData.name}
            onChange={(e) => {
              setPersonData({ ...personData, name: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Phone number"
            value={personData.phoneNumber}
            onChange={(e) => {
              setPersonData({ ...personData, phoneNumber: e.target.value });
            }}
          />
          <input
            type="text"
            placeholder="Age"
            value={personData.age}
            onChange={(e) => {
              setPersonData({ ...personData, age: e.target.value });
            }}
          />
        </div>
        <label
          htmlFor="isEmployee"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          Are you an employee
        </label>
        <input
          type="checkbox"
          id="isEmployee"
          style={{ margin: "16px" }}
          checked={personData.isEmployee}
          onChange={(e) => {
            setPersonData({ ...personData, isEmployee: e.target.checked });
          }}
        />
        <select
          placeholder="Salary"
          style={{
            margin: "0 0 30px 0",
            border: "none",
            outline: "none",
            padding: "10px",
            borderRadius: "5px",
          }}
          value={personData.salary}
          onChange={(e) => {
            setPersonData({ ...personData, salary: e.target.value });
          }}
        >
          <option>Salary</option>
          <option>less than 500{currency}</option>
          <option>
            between 500{currency} and 2000{currency}
          </option>
          <option>Above than 500{currency}</option>
        </select>
        <button disabled={btnIsDisabled}className={btnIsDisabled?'disabled':''}>Send</button>
      </form>
      <Popup isVisible={showPopup} errorMessag={errorMessag}/>
    </div>
  );
}
