import React,{useState} from 'react';
import Form from './Form';
import List from './List';

//***********1***************
// const App=()=>{
//   const job="software developer"
//   return (<div><h1>hi GUVI</h1><Form>vijay</Form><Form>vishnu</Form><Form work={job}/>
//   <input type="text" placeholder="type here....."></input><button>Submit</button></div>
//   );
// }

//***********2***************
// const App=()=>{
//   return(<Form/>);
// }

//***********3***************
// const App=()=>{
//   return(<Form/>);
// }

//***********4***************
// const App=()=>{
//   return(<Form/>);
// }

//***********5***************
// const App=()=>{
//   return(<Form/>);
// }

//***********6***************
const App=()=>{
  const[title,settitle]=useState("");
  const additem=element=>{
     settitle(element)
     console.log(element);
  }
  return(
    <div><Form additem={additem}/><List items={title}/></div>
  );
}
export default App;
