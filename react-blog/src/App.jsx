import React from "react";
import {UserComponent, Profile, EmployeeDetails} from "./components/UserComponent";

function App(){
  // alert(sum())
  return(
    <div>
      <h1>App Component</h1>
      <UserComponent />
      <Profile />
      <EmployeeDetails />
    </div>
  )
}

export default App;