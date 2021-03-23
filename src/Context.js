import React, { useState, createContext } from "react";

export const DataContext = createContext();

const DataContextProvider = (props) => {
  const [height, setHeight] = useState("");
  const [weightBefore, setWeightBefore] = useState("");
  const [weightNow, setWeightNow] = useState("");
  const [week, setWeek] = useState("");
  const [checked, setChecked] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const onClick = () => setShowResults(true);

  const toggleChecked = () => setChecked((value) => !value);

  const bmi = (weightBefore / (Math.pow(height, 2) * 0.0001)).toFixed(2);

  const handleChange = (e) => {
    const name = e.target.name;
    setWeek({
      ...week,
      [name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <DataContext.Provider
      value={{
        height,
        setHeight,
        weightBefore,
        setWeightBefore,
        weightNow,
        setWeightNow,
        week,
        setWeek,
        checked,
        setChecked,
        toggleChecked,
        handleSubmit,
        bmi,
        handleChange,
        showResults,
        onClick,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
