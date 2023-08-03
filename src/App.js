import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import CallToActionWithVideo from './components/CallToAction';
import BreadCrumb from './components/Breadcrumb';
import WithLargeQuote from './components/Testimonials';
import Fonts from "./Fonts"

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',

  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      {/* <Container maxW={''}> */}
      <BreadCrumb />
      <CallToActionWithVideo />
      <WithLargeQuote />
      {/* </Container> */}
    </ChakraProvider>
  );
}

export default App;
