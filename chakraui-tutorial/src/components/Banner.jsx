import React from 'react';
import { Box, Image, Button, Container, Heading, Grid } from '@chakra-ui/react';
import brandLogo from '../assets/brand-logo.svg';
import illustration from '../assets/illustration.svg';
import rightArrow from '../assets/right-arrow1.svg';
import imageOne from '../assets/image-one.jpg';
import imageTwo from '../assets/image-two.jpg';
import imageThree from '../assets/image-three.jpg';

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
              <Box mt='6' fontWeight='medium'>
                Join a group to meet people, make friends, find support, grow a
                business, and explore your interestes. Thousands of events are
                happening every day, both online and in person!
              </Box>
            </Box>
            <Box w='100%'>
              <Image w='100' src={illustration} alt='illustration' />
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxW='container.lg.xl' mt={10}>
        <Grid templateColumns='repeat(3,1fr)'>
          <Box>
            <Image w='100%' borderRadius='lg' src={imageOne} alt='image one' />
            <Button colorScheme='teal' variant='link' mt='5'>
              Make new friend
              <Image w='4%' ml='2' src={rightArrow} alt='right arrow' />
            </Button>
          </Box>
          <Box>
            <Image w='100%' borderRadius='lg' src={imageTwo} alt='image two' />
            <Button colorScheme='teal' variant='link' mt='5'>
              Make new friend
              <Image w='4%' ml='2' src={rightArrow} alt='right arrow' />
            </Button>
          </Box>
          <Box>
            <Image
              w='100%'
              borderRadius='lg'
              src={imageThree}
              alt='image three'
            />
            <Button colorScheme='teal' variant='link' mt='5'>
              Make new friend
              <Image w='4%' ml='2' src={rightArrow} alt='right arrow' />
            </Button>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
