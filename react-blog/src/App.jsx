import React from "react";
import {ProductList} from "./components/ProductList";
import {TableComponent} from "./components/TableComponent";


function App(){
  // alert(sum())
  return(
    <div>
      <h1>App Component</h1>
      <ProductList />
      <TableComponent />
    </div>
  )
}

export default App;