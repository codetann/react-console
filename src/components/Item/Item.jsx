import React, { useState } from "react";
import { CrossButton, Container, Text, Icon } from "./Item.style";
import useToggle from "../../hooks/useToggle";

export default function Item({ text = "test", show }) {
  const [toggled, setToggled] = useState(false);
  const [value, setValue] = useState(text);

  const handleToggle = () => setToggled(!toggled);
  const handleValue = () => setValue((e) => e.target.value);

  if (!show && toggled) return <></>;

  return (
    <Container>
      {toggled && (
        <Icon onClick={handleToggle}>
          <i className="fas fa-check"></i>
        </Icon>
      )}
      {!toggled && <CrossButton onClick={handleToggle} />}

      <Text crossed={toggled}>{text}</Text>
    </Container>
  );
}
