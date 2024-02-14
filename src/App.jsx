import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Birthdaylist from './Component/Birthdaylist'
// import Leo from './Component/Leo'
// import Productcomp from './Component/Productcomp'
// import Accordionparent from './Component/Accordionparent'
import Dayonefun from './Component/FunctionComp/Dayonefun'
import Birthdayfun from './Component/FunctionComp/Birthdayfun'
import ReducerComp from './Component/FunctionComp/ReducerComp'
import Countercomp from './Component/Countercomp'
import Willmount from './Component/willmount'
import Productfun from './Component/FunctionComp/Productfun'
import Birthday from './Component/FunctionComp/Birthday'
import Apicall from './Component/FunctionComp/Apicall'
import Mountingupdateunmount from './Component/FunctionComp/Mountingupdateunmount'
import Form from './Component/FunctionComp/Form'

function App() {
//  const [count, setCount] = useState(0)
//   state={
//     isshow:true
//   }
//   handleremove=() =>{
// this.setstate({isshow:false})
//   }
// const [isshow,setisshow]=useState(true)

// const handleclose=()=>{
//   setisshow(false)
// }
  return (
     <>
      {/* <Form/> */}
     {/* {isshow ? <Mountingupdateunmount/>:null}
     <button onClick={handleclose}>Close</button> */}
     {/* <Apicall/> */}
      {/* <Birthday/>  */}

     {/* <Productfun/> */}
{/* //     <button onClick={this.handleremove}>Remove data</button>
//     {this.state.isshow ? <Willmount/> :null} */}
    {/* <Countercomp ram={"kiruthika"}/> */}
      {/* <ReducerComp /> */}
      {/* <Birthdayfun/> */}
      {/* <Counter/> */}
      {/* <Leo/>  */}
      {/* <Birthdaylist/> */}
      {/* <Productcomp/> */}
      {/* <Accordionparent/> */}
      {/* <Dayonefun moviename={"jailer"}/>
    <Dayonefun moviename={"leo"}/>
    <Dayonefun moviename={"dd return"}/>
    <Dayonefun moviename={"magathaa"}/> */}

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
