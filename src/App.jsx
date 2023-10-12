import React, { useState } from 'react';
import Form from './Form';

function App() {
  const [callback, setCallback] = useState(false);

  const handleSubmit = (data) => {
    console.log('data', data)
    setCallback(true)
  }

  return (
    <Form handleSubmit={handleSubmit} callback={callback} />
  );
}

export default App;
