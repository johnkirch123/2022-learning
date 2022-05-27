import React from 'react';
import { Box, Image, Button, Container, Heading } from '@chakra-ui/react';
import brandLogo from '../assets/brand-logo.svg';

const Banner = () => {
  return (
    <>
      <header>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          ml={6}
          mr={6}
        >
          <Box>
            <Image boxSize='90px' src={brandLogo} alt='brand' />
          </Box>
          <Box>
            <Button pr={3} colorScheme='gray.600' fontSize='sm' variant='link'>
              Log in
            </Button>
            <Button colorScheme='gray.600' fontSize='sm' variant='link'>
              Sign up
            </Button>
          </Box>
        </Box>
      </header>

      <Box>
        <Container maxWidth='container.lg.xl'>
          <Box display='flex' alignItems='center' py='20' flexDirection='row'>
            <Box>
              <Heading>
                <Box>Dive in! There are so many things to do in Meetup</Box>
              </Heading>
              <Box mt='6' fontWeight='medium'></Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
