import React from 'react';
import {
  Box,
  Image,
  Button,
  Container,
  Heading,
  Grid,
  Badge,
  FormControl,
  Input
} from '@chakra-ui/react';
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
        <Container maxWidth='container.xl'>
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

      <Container maxW='container.xl' mt={10}>
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
              Explore the outdoors
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
              Connect over tech
              <Image w='4%' ml='2' src={rightArrow} alt='right arrow' />
            </Button>
          </Box>
        </Grid>
      </Container>

      <Container maxW='container.xl' mt='5'>
        <Box
          display='flex'
          direction='row'
          flexWrap='wrap'
          justifyContent='space-between'
        >
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Boost your carrier
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Find your zen
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Get moving
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Share language + culture
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Read with friends
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Write together
          </Badge>
          <Badge
            borderRadius='3xl'
            px={4}
            py={2}
            mr='4'
            mb='4'
            textTransform='normal'
            color='#ffffff'
            bg='blue.100'
          >
            Hone your craft
          </Badge>
        </Box>
      </Container>

      <Container maxW='container.xl' mt='20'>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <Box>
            <Heading as='h3' size='lg' mb='7'></Heading>
            <Box
              display='flex'
              alignItems='center'
              flexDirection='row'
              w='100%'
            >
              <Box flexBasis='50%' w='100%' mr='2'>
                <FormControl>
                  <Box pos='relative'>
                    <Input
                      placeholder="Search for 'tennis'"
                      type='text'
                      w='100%'
                    ></Input>
                    <Box pos='absolute' top='3' left='2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 20 20'
                        fill='#c0c0c0'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.47614.817 4.817a1 1 0 01-1.414 1.414l-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Box>
          </Box>
          <Box>
            <Heading as='h3' size='lg' mb='7'></Heading>
            <Box
              display='flex'
              alignItems='center'
              flexDirection='row'
              w='100%'
            >
              <Box flexBasis='50%' w='100%' mr='2'>
                <FormControl>
                  <Box pos='relative'>
                    <Input
                      placeholder="Search for 'tennis'"
                      type='text'
                      w='100%'
                    ></Input>
                    <Box pos='absolute' top='3' left='2'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='18'
                        height='18'
                        viewBox='0 0 20 20'
                        fill='#c0c0c0'
                      >
                        <path
                          fillRule='evenodd'
                          d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.47614.817 4.817a1 1 0 01-1.414 1.414l-4.816A6 6 0 012 8z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </Box>
                  </Box>
                </FormControl>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;
