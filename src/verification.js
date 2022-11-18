export const VerifDropdown = (inputvalue,inputlabel) => {
    if (inputvalue==""){
      inputlabel.current.style.color = "red";
      return false;
  
    
    }
    else {
      inputlabel.current.style.color = "white";
      return true;
  
    }
  
  }
  export const verifDate = (formname,formvalue,inputname)=>{

    if (formvalue =="") {
       formname.current.style.color = "red";
       return false;
  
    }
    else {
      formname.current.style.color = "white";
      return true;
  
    }
  
  }
  export const verif = (formname,formvalue,inputname) => {
    if (formvalue =="") {
      formname.current.style.backgroundColor = "red";
      formname.current.placeholder = "You Must Enter The "+inputname;
      return false;
  
   }
   else {
    formname.current.style.backgroundColor = "white";
    return true;
  }
  }
  
  