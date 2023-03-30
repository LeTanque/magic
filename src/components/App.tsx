import { Heading } from "@chakra-ui/react";
import React from "react";

import MagicLandingPage from "../../pages/MagicLanding";

const App: React.FC = () => {
  return (
    <>
      <Heading marginBottom="1rem">Magic</Heading>
      <MagicLandingPage />
    </>
  );
};

export default App;
