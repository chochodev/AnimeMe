'use client';

import { Button, Flex, Icon, Image, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import Logo from './logo';
import { FaSearch } from 'react-icons/fa';

const MyNavbar = () => {
  return (
    <Flex as='header' bg='onSurface' gap='1rem' justify='space-between' p='.8rem 1rem' h='max-content'>
      <Flex align='center'>
        <Logo color='white' />
      </Flex>
      <Flex w='full'>
        <InputGroup w='40vw' minW='6rem'>
          <Input variant='primary' placeholder='Search...' />
          <InputLeftElement>
            <Icon as={FaSearch} color='secondary' size='lg'/>
          </InputLeftElement>
        </InputGroup>
      </Flex>
      <Flex gap='5px' align='center' h='tall'>
        <Button size='xs' variant='secondary'>Login</Button>
        <Button size='xs' variant='primary'>Signin</Button>
      </Flex>
      <Image src='./light01.jpg' h='5rem' w='5rem' alt='DP'/>
      <Flex>
        <Button>
          <Image src='../../public/images/light01.jpg' alt='DP'  />
        </Button>
        <Flex dir='col' gap='.5rem'>

        </Flex>
      </Flex>
    </Flex>
  )
}

export default MyNavbar;