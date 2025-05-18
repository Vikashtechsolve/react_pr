import { BrowserRouter, Routes, Route } from "react-router";
import { useEffect, useState } from "react";
import Header from "./component/header";
import Footer from "./component/footer";
import FormComponent from "./component/FormCmp";
import Abouts from "./component/Abouts";
import Carrer from "./component/Carrer";
import Main from "./component/Main";
import Button from '@mui/material/Button';

function App() {

  const [data,setData]=useState("")

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/').then((data)=>data.json()).then((data)=>console.log(data)).catch((err)=>console.log(err))
  },[])

  const changeData=()=>{
    setData("hiiii")
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
         <Button variant="text">Text</Button>
        <button onClick={changeData}>CLick Me</button>
        <Routes>
          <Route path="/" element={ <Main/>} />
          <Route path="/about" element={<Abouts />} />
          <Route path="/career" element={<Carrer />} />
          <Route path="/form" element={ <FormComponent />} />   
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;




