import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

export default function useStorage() {
  const [storage, setStorage] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("storage")) ?? [];
    } catch {
      console.log("ERROR: cannot parse json");
      return [];
    }
  });

  useEffect(
    () => localStorage.setItem("storage", JSON.stringify(storage)),
    [storage]
  );

  const save = (d) =>
    setStorage((prevState) => [...prevState, { id: uuid(), data: d }]);
  const remove = (id) =>
    setStorage((prevState) => prevState.filter((i) => i.id !== id));

  return [storage, save, remove];
}
