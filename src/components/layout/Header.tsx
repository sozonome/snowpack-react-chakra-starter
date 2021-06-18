import { Box, Flex, Heading } from '@chakra-ui/layout';
import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      alignSelf="flex-start"
      justifyContent="center"
      gridGap={2}
    >
      <Link to="/">
        <Heading as="h1" size="sm">
          snowpack-react-chakra-starter
        </Heading>
      </Link>

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
