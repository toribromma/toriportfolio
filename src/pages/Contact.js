import React from 'react';

import { Fragment } from 'react';
import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoLocation } from 'react-icons/go';
import { BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

const contactOptions = [
  {
    label: 'Address',
    value: '10541 Lakeside Drive South',
    icon: GoLocation,
  },
  {
    label: 'PHONE NUMBER',
    value: '+1 714 702 0401',
    icon: BsPhone,
  },
  {
    label: 'EMAIL',
    value: 'toribromma@gmail.com',
    icon: HiOutlineMail,
  },
];

const Contact = () => {
  return (
    <Container
      borderRadius={'2xl'}
      backgroundColor={'blue.50'}
      maxW="7xl"
      mt={20}
      py={10}
      px={{ base: 5, md: 8 }}
    >
      <Stack spacing={10}>
        <Flex
          align="center"
          justify="center"
          direction="column"
          color={useColorModeValue('blackAlpha700', 'gray.700')}
        >
          <Heading size="4xl" mb={2}>
            Contact Me
          </Heading>
          <Text fontWeight={"bold"} fontSize="xl" textAlign="center" maxW="4xl" m={5} p={8}>
            "Let's connect and collaborate! If you're seeking a dedicated MERN
            Full Stack Web Developer to bring your digital ideas to life, look
            no further. Whether you have a specific project in mind or need
            someone to shape your vision, I'm here to provide efficient,
            scalable solutions tailored to your needs. Reach out now, and let's
            create something extraordinary together!"
          </Text>
        </Flex>
        <Stack
          spacing={{ base: 6, md: 0 }}
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          color={useColorModeValue('blackAlpha700', 'gray.700')}
        >
          {contactOptions.map((option, index) => (
            <Fragment key={index}>
              <Stack
                spacing={3}
                direction="column"
                justify="center"
                alignItems="center"
                px={3}
              >
                <Icon as={option.icon} w={10} h={10} color="green.400" />
                <Text fontSize="lg" fontWeight="semibold">
                  {option.label}
                </Text>
                <Text fontSize="md" textAlign="center">
                  {option.value}
                </Text>
              </Stack>
              {contactOptions.length - 1 !== index && (
                <Flex d={{ base: 'none', md: 'flex' }}>
                  <Divider orientation="vertical" />
                </Flex>
              )}
            </Fragment>
          ))}
        </Stack>
        <VStack
          as="form"
          spacing={8}
          w="100%"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="lg"
          boxShadow="lg"
          p={{ base: 5, sm: 10 }}
        >
          <VStack spacing={4} w="100%">
            <Stack
              w="100%"
              spacing={3}
              direction={{ base: 'column', md: 'row' }}
            >
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input type="text" placeholder="Place name here" rounded="md" />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Place email here" rounded="md" />
              </FormControl>
            </Stack>
            <FormControl id="subject">
              <FormLabel>Subject</FormLabel>
              <Input
                type="text"
                placeholder="Are you available for freelance work?"
                rounded="md"
              />
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <Textarea
                size="lg"
                placeholder="Enter your message"
                rounded="md"
              />
            </FormControl>
          </VStack>
          <VStack w="100%">
            <Button
              bg="green.300"
              color="white"
              _hover={{
                bg: 'green.500',
              }}
              rounded="md"
              w={{ base: '100%', md: 'max-content' }}
            >
              Send Message
            </Button>
          </VStack>
        </VStack>
      </Stack>
    </Container>
  );
};

export default Contact;
