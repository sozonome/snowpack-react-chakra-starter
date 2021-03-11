import Icon from '@chakra-ui/icon';
import { Box, Heading } from '@chakra-ui/layout';
import React from 'react';
import { FiSmile } from 'react-icons/fi';

import Layout from './components/layout';

const App = () => {
  return (
    <Layout>
      <Box>
        <Heading textAlign="center">
          Hello
          <Icon as={FiSmile} />
        </Heading>
      </Box>
    </Layout>
  );
};

export default App;
