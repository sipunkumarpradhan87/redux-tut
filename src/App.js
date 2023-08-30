// import {  Route, Routes } from "react-router-dom";
// import Firstpage from "./Firstpage";
// import Gmail from "./Gmail";
// import Hello from "./Hello";

// import Check from "./Component/Check";
// import Checkbox from "./Component/Checkbox";

// import Chcked from "./Component/Chcked";

// import Formsss from "./Component/Form";





// import Regfirstpage from "./Component/Regfirstpage";
// import PasswordForm from "./Hello";

// import { Route, Routes } from "react-router";
// import PageWithSaveButton from "./Component/Pra1";
// import DisplayPage from "./Component/Pra2";

// import InsertPage from "./Component/Insert";

// import MyComponent from "./Component/HoverColor";
// .........
import { Routes,Route } from "react-router";
import Regsecondpage from "./Component/Regsecondpage";
import Regfirstpage from "./Component/Regfirstpage";
import Firstpage from "./Firstpage";

// import OriginalForm from "./Component/OriginalForm";
// ............

// import Regsecondpage from "./Component/Regsecondpage";

// import Password from "./Component/Password";
// import Checkbox from "./Component/Checkbox";
// import Regfirstpage from "./Component/Regfirstpage";






function App() {
  return (
    <div className="App">
    {/* <BrowserRouter> */}
    {/* <Routes>
      <Route path="/" element={<Firstpage/>}/>
      <Route path="/Gmail" element={<Gmail/>}/>
      <Route path="/Hello" element={<Hello/>}/>
    </Routes> */}
    {/* </BrowserRouter> */}
{/* <Regfirstpage/> */}
{/* <Regsecondpage/> */}
    {/* <Hello/> */}
    {/* ...... */}
   <Routes>
      <Route path="/" element={<Firstpage/>}/>
      <Route path="/Regsecondpage" element={<Regsecondpage/>} />
      <Route path="/Regfirstpage" element={<Regfirstpage/>}/> 
  </Routes> 
  {/* <OriginalForm/> */}
  {/* ...... */}
  {/* <Routes>
    <Route path="/" element={<PageWithSaveButton/>}/>
    <Route path="/display" element={<DisplayPage/>}/>
  </Routes> */}


  {/* <InsertPage/> */}
    {/* <Password/> */}
    {/* <Checkbox/> */}
    {/* <MyComponent/> */}
    {/* <PasswordForm/> */}
    {/* <Regfirstpage></Regfirstpage> */}
    {/* <Form/> */}
    {/* <Formsss/> */}
    {/* <Chcked/> */}
    {/* <Checkbox/> */}
    {/* <Check/> */}
    </div>
  );
}

export default App;
