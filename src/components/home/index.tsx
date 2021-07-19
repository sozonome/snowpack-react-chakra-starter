import { Grid } from '@chakra-ui/react';
import React from 'react';

import SomeImage from './components/SomeImage';
import SomeText from './components/SomeText';
import CTASection from './components/CTASection';

const Home = () => {
  return (
    <Grid gap={4}>
      <SomeText />
      <SomeImage />
      <CTASection />
    </Grid>
  );
};

export default Home;
