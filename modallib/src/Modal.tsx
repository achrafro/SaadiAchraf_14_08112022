import React from "react";
 import './Modal.css'
 
 
export default function ({ showed }: {showed: string}) {
  const modalref = document.getElementsByClassName(
    'Modal',
  ) as HTMLCollectionOf<HTMLElement>;
 
const  closebtn = ()=> {

console.log("clickeda");
console.log(modalref);
modalref[0].style.display = 'none';
}
return (
 <>
  <div className='Modal' >
  <div className='textinmodal'> <h2>Employee Created ! </h2></div>
  <div className='buttonclose' onClick={closebtn} ><h3> X </h3></div>
  
  
  </div>
  
  </> 

)



      //   <div className='modalbox'   >
      //   <div className="details-modal">
      //   <div className="details-modal-close" >
      //       <div className='buttonclose'    > 
      //     X
      //     </div>
      //   </div>
      //   <div className="details-modal-title">
      //     <h1>Employee Created ! </h1>
      //   </div>
       
      // </div>
      // </div>
         
 
 
      
  }
