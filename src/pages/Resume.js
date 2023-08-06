import {
  Container,
  Heading,
  ListItem,
  Box,
  UnorderedList,
  Text,
  useColorModeValue,
  HStack,
  StackDivider,
} from '@chakra-ui/react';
import React from 'react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';

const resumeData = {
  name: 'Tori Bromma',
  email: 'toribromma@gmail.com',
  phone: '(714) 702-0401',
  education: [
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'XYZ University',
      duration: '2015-2019',
    },
  ],
  workExperience: [
    {
      position: 'Software Engineer',
      company: 'ABC Tech',
      duration: '2019-present',
      responsibilities: [
        'Develop and maintain web application using React, Node.js, and Express.js.',
        'Collaborate with cross-functional teams to design and implement new features.',
        'Optimize web applications for performance and responsiveness.',
      ],
    },
    {
      position: 'Junior Web Developer',
      company: 'XYZ Solutions',
      duration: '2018-2019',
      responsibilities: [
        'Assisted in the development of front-end components for client projects.',
        'Learned and applied best practices in web development.',
        'Contributed to team projects using Git and version control.',
      ],
    },
  ],
  skills: [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Express.js',
    'HTML5',
    'CSS3',
    'Git',
  ],
  projects: [
    'Personal Portfolio Website - Developed a responsive portfolio website to showcase projects and skills.',
    'E-commerce Web App - Created a full-stack e-commerce application with React and Express.',
  ],
};

const ResumePage = () => {
  return (
    <Container
      color={useColorModeValue('blackAlpha700', 'gray.700')}
      backgroundColor={'blue.50'}
      mt={20}
      maxW={'7xl'}
      borderRadius={'2xl'}
      py={10}
      px={{ base: 5, md: 8 }}
      textAlign={'center'}
    >
      <Heading as="h1" size={'4xl'} mb={20}>
        <Text
          as={'span'}
          position={'relative'}
          _after={{
            content: "''",
            width: 'full',
            height: '30%',
            position: 'absolute',
            bottom: 1,
            left: 0,
            bg: 'blue.400',
            zIndex: -1,
          }}
        >
          Resume
        </Text>
      </Heading>
      <HStack
        m={20}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={3}
        justify={'center'}
      >
        <Box>
          <Heading as="h2">{resumeData.name}</Heading>
          <Text mt={5}>
            <EmailIcon /> {resumeData.email}
          </Text>
          <Text mt={5}>
            <PhoneIcon /> {resumeData.phone}
          </Text>
        </Box>
        <Box>
          <Heading as="h2">Education</Heading>
          {resumeData.education.map((edu, index) => (
            <Box key={index}>
              <Text mt={5}>{edu.degree}</Text>
              <Text mt={5}>
                {edu.university}, {edu.duration}
              </Text>
            </Box>
          ))}
        </Box>
      </HStack>
      <Heading as="h2" mt={5}>
        Work Experience
      </Heading>

      <HStack
        m={20}
        divider={<StackDivider borderColor="gray.200" />}
        spacing={8}
        justify={'center'}
      >
        {resumeData.workExperience.map((exp, index) => (
          <Box key={index}>
            <Heading as="h3" size="md">
              {exp.position} - {exp.company}, {exp.duration}
            </Heading>
            <UnorderedList>
              {exp.responsibilities.map((responsibilities, index) => (
                <ListItem listStyleType={"none"} mt={3} key={index}>
                  {responsibilities}
                </ListItem>
              ))}
            </UnorderedList>
          </Box>
        ))}
      </HStack>

      <Heading as="h2" mt={5}>
        Skills
      </Heading>
      <Box m="auto" maxWidth={'xs'}>
        <UnorderedList>
          {resumeData.skills.map((skill, index) => (
            <ListItem listStyleType={"none"}  mt={3} key={index}>
              {skill}
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
      <Heading as="h2" mt={5}>
        Projects
      </Heading>
      {resumeData.projects.map((project, index) => (
        <Text mt={2} key={index}>
          {project}
        </Text>
      ))}
    </Container>
  );
};

export default ResumePage;
