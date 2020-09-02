import React from "react";
import "./style.css";
import {Button} from "reactstrap"

export default function App() {

const addOrganizationERP = (e) =>{
    alert('click');
}


  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
       <Button.Ripple outline color="success" onClick={addOrganizationERP} >
            
                Add More
              </Button.Ripple>
    </div>
  );
}
