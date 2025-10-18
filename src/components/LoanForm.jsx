import Popup from "./Popup";

export default function LoanForm() {
    let currency='EG';
  return (
    <div className={'formPerant'}>
      <form className={'form flex'} style={{flexDirection:'column'}}>
        <h1>Requesting a loan</h1>
        <hr style={{border:'none'}}/>
        <div style={{margin:'50px'}}>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Age" />
        </div>
        <label htmlFor="isEmployee" style={{fontSize:'20px',fontWeight:'bold',}}>Are you an employee</label>
        <input type="checkbox" id="isEmployee" style={{margin:'16px'}} />
        <select placeholder='Salary' style={{margin:'0 0 30px 0',border:'none',outline:'none',padding:'10px',borderRadius:'5px'}}>
            <option >Salary</option>
            <option value="">less than 500{currency}</option>
            <option value="">between 500{currency} and 2000{currency}</option>
            <option value="">Above than 500{currency}</option>
        </select>
        <button>Send</button>
      </form>
      <Popup/>
    </div>
  );
}
