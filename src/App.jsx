import React, { useState } from "react";
import useStorage from "./hooks/useStorage";
import {
  Application,
  Title,
  Header,
  ShowButton,
  Input,
  Form,
  Todos,
} from "./App.style";
import Item from "./components/Item/Item";

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
          }}
        >
          {show ? "Hide" : "Show"} completed
        </ShowButton>
      </Header>

      {/* Body */}
      <Todos>
        {storage &&
          storage.map((item) => (
            <Item key={item.id} show={show} text={item.data} />
          ))}
      </Todos>

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
