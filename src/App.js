import React, { useContext } from "react";
import { DataContext } from "./Context";

import BodyIndex from "./Components/BodyIndex";
import Calculator from "./Components/Calculator";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import Results from "./Components/Results";
import FooterInfo from "./Components/FooterInfo";
import BottomAppBar from "./Components/BottomAppBar";

const App = () => {
  const { showResults } = useContext(DataContext);
  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <Header />
      <Intro />
      <Calculator />
      {showResults ? (
        <>
          <BodyIndex />
          <Results />
        </>
      ) : null}
      <FooterInfo />
      <BottomAppBar />
    </div>
  );
};

export default App;
