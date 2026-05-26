"use client";
import { useState } from "react";

function Greeting() {
  console.log("tess");
  // const name = "RevoU";
  const [name, setName] = useState("RevoU");

  return (
    <>
      <h1>Hello {name}</h1>
    </>
  );
}

export default Greeting;
