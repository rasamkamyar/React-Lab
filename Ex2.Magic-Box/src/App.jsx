import { useState } from "react";
import Box from "./Box";
import "./App.css";

function App() {
  return (
    <section>
      {[...new Array(16)].map(() => (
        <Box />
      ))}
    </section>
  );
}

export default App;
