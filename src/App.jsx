import React, { useState } from "react";
import useStorage from "./hooks/useStorage";
import { useChange } from "./hooks/useEvent";
import {
  Application,
  Title,
  Header,
  ShowButton,
  Input,
  Form,
} from "./App.style";

function App() {
  const [storage, save, remove] = useStorage();
  const [value, setValue] = useState("");
  const [show, setShow] = useState(true);

  const handleShow = () => setShow(!show);
  const handleChange = (e) => setValue(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;

    save(value);
    setValue("");
  };

  return (
    <Application>
      {/* Header */}
      <Header>
        <Title>Todo</Title>
        <ShowButton
          role="button"
          onClick={() => {
            handleShow();
            console.log(value);
          }}
        >
          {show ? "Hide" : "Show"} completed
        </ShowButton>
      </Header>

      {/* Body */}
      <div>
        {storage && storage.map((item) => <p key={item.id}>{item.data}</p>)}
      </div>

      {/* Input */}
      <Form onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder="Enter Text Here..."
          type="text"
        />
      </Form>
    </Application>
  );
}

export default App;
