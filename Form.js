import React,{useState} from 'react';

function Form(props)
 {
        
    //***********1***************
//     const Form=(props1)=>
//  {
//   return (<div><h1>Codekata</h1><h3>{props1.children}</h3><h4>{props1.work}</h4></div>
//}
//***********2***************
// return(<div><h1>Hi guvi</h1></div>);

//***********3***************
// const[title,settitle]=useState("Hi guvi..");
// return(<h1>{title}</h1>)

//***********4***************
// const[title,settitle]=useState("Hi guvi..");
// return(<div><h1>{title}</h1><input type="text" placeholder="type here.." onChange={event=>settitle(event.target.value)}/></div>)

//***********5***************
// const handletitle=(event)=>{
//     settitle(event.target.value)
// }
// const[title,settitle]=useState("Hi guvi..");
// return(<div><h1>{title}</h1><input type="text" placeholder="type here.." onChange={handletitle}/></div>)

//***********6***************
const handletitle=(event)=>{
settitle(event.target.value)
}
const Submit=(e)=>{
    props.additem(title);
    console.log(title);
}
 
const[title,settitle]=useState("");
return(<div><h1>{title}</h1><input type="text" placeholder="type here.." onChange={handletitle}/>
<button onClick={Submit}>Submit</button>
</div>)

}


export default Form;
