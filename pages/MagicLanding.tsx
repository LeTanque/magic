import { Box, ChakraProvider } from "@chakra-ui/react";
// import _ from "lodash";
import React from "react";

const MagicLanding: React.FC = () => {
  // const [card, setCard] = useState();

  return (
    <ChakraProvider resetCSS>
      <Box width="full" className="landingPageContainer"></Box>
    </ChakraProvider>
  );
};

export default MagicLanding;
