import React, { memo } from "react";
import Helloworld from "./components/Helloworld";

const App = memo((props) => {
  return (
    <div>
      <Helloworld />
    </div>
  );
});

export default App;
