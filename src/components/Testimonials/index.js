import React from 'react';

import { Avatar, Box, Stack, Text, useColorModeValue } from '@chakra-ui/react';

export default function WithLargeQuote() {
  return (
    <Stack
      bg={useColorModeValue('blue.50', 'blue.800')}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={'center'}
      direction={'column'}
    >
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        textAlign={'center'}
        maxW={'7xl'}
      >
        Working with <b>Tori</b> to create our business website was an absolute
        delight. Their expertise in web development, especially with the MERN
        stack, was evident from the start. They understood our requirements
        perfectly and transformed our vision into a stunning reality. The
        website they built not only looks fantastic but also functions
        flawlessly, offering a seamless user experience. Their dedication,
        professionalism, and attention to detail throughout the process were
        truly commendable. We couldn't be happier with the end result, and we
        highly recommend <b>Tori</b> to anyone seeking a talented MERN Full
        Stack Web Developer for their projects.
      </Text>
      <Box textAlign={'center'}>
        <Avatar
          src={
            'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80'
          }
          mb={2}
        />

        <Text fontWeight={600}>Jessica Longhorn</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.400', 'gray.400')}>
          Vice President
        </Text>
      </Box>
    </Stack>
  );
}
