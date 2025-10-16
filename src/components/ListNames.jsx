import { useState } from "react";

export default function ListNames() {
  const [deviceName, setDeviceName] = useState("");

  const [mobileDevices, setMobileDevices] = useState([
    "Smartphone",
    "Tablet",
    "Smartwatch",
    "E-reader",
    "Bluetooth headset",
    "Power bank",
    "Portable gaming console",
    "Mobile hotspot",
    "Portable charger",
    "Wireless earbuds",
    "Fitness tracker",
    "Smart glasses",
  ]);

  let mobileDevicesList = mobileDevices.map((device, index) => {
    return <li key={index}>{device}</li>;
  });

  return (
    <>
      {mobileDevicesList}
      <input
        type="text"
        value={deviceName}
        onChange={(e) => {
          setDeviceName(e.target.value);
        }}
      />
      <button onClick={handleClicked}>Add</button>
    </>
  );





  function handleClicked(){
    let newDevices=[...mobileDevices,deviceName]
    setMobileDevices(newDevices)
    setDeviceName('')
  }
}
