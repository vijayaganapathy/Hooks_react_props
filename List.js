import React from 'react';
//***********6***************
const List=(props)=>
 {
return(<div key={props.items}>
    {/* <ul>{props.items.map(i=>{
    <li key={i}>{i}</li>
})}</ul> */}
{props.items}</div>)
 }
 export default List;
