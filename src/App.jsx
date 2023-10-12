import React, { useState } from "react";
import Form from "./Form";

function App() {
  const [isFormReset, setFormReset] = useState(false);

  const handleSubmit = (data) => {
    console.log("data", data);
    setFormReset(true);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      setFormReset={setFormReset}
      isFormReset={isFormReset}
    />
  );
}

export default App;
