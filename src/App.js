import React from "react";
import Result from "./components/Result";

import DataProvider from './context/DataProvider';
import Code from "./components/Code";


function App() {

  return (

    <DataProvider>
      <Code />
      <Result />
    </DataProvider>
  );
}

export default App;


