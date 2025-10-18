export default function Popup({ isVisible, errorMessag }) {
  if (isVisible) {
    return (
      <div className={"popup-parent"}>
        {errorMessag ? (
          <div className={"popup-content"} style={{color:'red'}}>
            {errorMessag}❌❌
          </div>
        ) : (
          <div className={"popup-content"}>
            ✅ The data was sent successfully!
          </div>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}
