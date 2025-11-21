import Header from "./Header";  

function Apple(){
  console.log("Sum is: " + sum());
  alert("Sum is: " + sum());
  return(
    <>
      <h1>This is Apple</h1>
      <Fruits />
      <Colors />
    </>
  )
}

function Fruits(){
  return(
    <>
      <h1>This is Fruits Component</h1>
    </>
  )
}

function Colors(){
  return(
    <>
      <h1>This is Colors Component</h1>
    </>
  )
}

function sum(){
  return 4+6
}

export default Apple;