import { ChakraProvider, Heading } from '@chakra-ui/react';
import React from 'react';

import Spreadsheet from 'components/Spreadsheet';
// import { Accordian } from 'components/Accordian';
// import { TabsPanel } from 'components/TabsPanel';
// import { Alerts } from 'components/Alerts';
// import { ControlledInput } from './ControlledInput';

const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Heading marginBottom="1rem">Spreadsheet</Heading>
      <Spreadsheet />
      {/* <Heading marginBottom="1rem" marginTop="2rem">Accordian</Heading>
      <Accordian />
      <Heading marginBottom="1rem" marginTop="2rem">Tabs</Heading>
      <TabsPanel />
      <Heading marginBottom="1rem" marginTop="2rem">Alerts</Heading>
      <Alerts />
      <Heading marginBottom="1rem" marginTop="2rem">Controlled input</Heading>
      <ControlledInput /> */}
    </ChakraProvider>
  );
};

export default App;
