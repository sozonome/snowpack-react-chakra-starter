import { Box, Heading, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';

const SomeText = () => {
  return (
    <Box textAlign="center">
      <Heading>
        Hello
        <Icon as={BiWinkSmile} />
      </Heading>
      <Text>
        This is a snowpack react template with Chakra-UI and TypeScript setup.
      </Text>
    </Box>
  );
};

export default SomeText;
