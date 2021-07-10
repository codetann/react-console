import React, { useState } from "react";
import useToggle from "../../hooks/useToggle";

export default function Item() {
  const [isCrossed, setCrossed] = useToggle(false);

  return <div></div>;
}
