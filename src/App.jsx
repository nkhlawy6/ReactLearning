import "./App.css";
import ListNames from "./components/ListNames";
import LoanForm from "./components/LoanForm";
import PersonData from "./components/PersonData";
import Header from './components/Header'
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/listNames" element={<ListNames />} />
        <Route path="/personData" element={<PersonData />} />
        <Route path="/" element={<LoanForm />} />
      </Routes>
    </>
  );
}

export default App;
