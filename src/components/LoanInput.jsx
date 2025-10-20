export default function LoanInpu({Value,handleInput,title}) {
  console.log(Value);
  return (
    <>
      <input
        type="text"
        placeholder={title}
        value={Value}
        onChange={(e) => {
          handleInput(e.target.value)
        }}
      />
    </>
  );
}
