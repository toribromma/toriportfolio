import React from 'react';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  // BreadcrumbSeparator,
  Spacer,
  Flex,
  Box,
  Container,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from '../../ColorModeSwitcher';

export default function BreadCrumb() {
  const links = ['Home', 'Projects', 'Resume','Contact'];
  let currentPage = /[^/]*$/.exec(window.location.href)[0];

  return (
    <Container maxW={''} backgroundColor={'blue.600'}>
      <Container maxW={'7xl'}>
        <Box
          display={{ sm: 'flex' }}
          p={6}
          minWidth={'max-content'}
          alignItems={'center'}
          gap={2}
        >
          <Breadcrumb
            fontSize={{base:'0.6em', sm: "1em", md:'1em', lg:'1.5em'}}
            fontFamily={'Open Sans'}
            textColor={'whiteAlpha.800'}
          >
            {links.map(link =>
              link === currentPage ? (
                <BreadcrumbItem isCurrentPage>
                  <BreadcrumbLink href={`/${link}`}>{link}</BreadcrumbLink>
                </BreadcrumbItem>
              ) : (
                <BreadcrumbItem >
                  <BreadcrumbLink  href={`/${link}`}>{link}</BreadcrumbLink>
                </BreadcrumbItem>
              )
            )}
          </Breadcrumb>

          <Spacer />

          <ColorModeSwitcher />
        </Box>
      </Container>
    </Container>
  );
}
