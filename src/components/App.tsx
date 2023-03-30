import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';

import MagicLandingPage from '../../pages/MagicLanding';

const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Heading marginBottom="1rem">Magic</Heading>
      <MagicLandingPage />
    </ChakraProvider>
  );
};

export default App;
