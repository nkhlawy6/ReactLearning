export default function LoanInpu({Value,setPersonData,personDataValue}) {
  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={Value}
        onChange={(e) => {
          setPersonData({ ...personDataValue, name: e.target.value });
        }}
      />
    </>
  );
}
