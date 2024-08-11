import React from "react";

import { EventHandling } from "./components/EventHandling";
import { EventProps } from "./components/EventProps";
import { EventPropogation } from "./components/EventPropogation";

const App = () => {
  return (
    <>
      <EventHandling />
      <EventProps />
      <EventPropogation />
    </>
  );
};

export default App; 