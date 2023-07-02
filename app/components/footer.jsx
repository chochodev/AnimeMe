'use client';

import { Divider, Flex, IconButton, Button, Input, Switch, Text } from '@chakra-ui/react';
import React from 'react';
import Logo from './cards/logo';
import { RiSearch2Line } from 'react-icons/ri';
import Link from 'next/link';
import { FaFacebook, FaGoogle, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const MyFooter = () => {
  return (
    <Flex as='footer' flexDir='column' justify='center' w='full' h='max' p='2rem calc(.5rem + 5vw)' bg='onSurface' >
      <Flex flexDir='column' gap='1rem'>
        <Flex flexDir='column'>
          <Logo mdWidth='10rem' mdHeight='4rem' myWidth='7rem' myHeight='2.5rem'/>
          <Text fontSize='.7rem' fontWeight='400' color='secondary' transform='translateY(-.8rem)'>|--Where opinions counts--|</Text>
        </Flex>
        <Flex align='center' gap='.25rem'>
          <Input variant='primary' placeholder='Search...' maxW='20rem' />
          <IconButton type='submit' border='0' outline='0' h='2.25rem' w='1.8rem' borderRadius='md' icon={<RiSearch2Line p='0' m='0' />} />
        </Flex>
        <Flex gap='1rem'>
          <Link href='/'>
            <Text color='secondaryText' _hover={{color: 'secondary'}} fontSize='xs'>Privacy policy</Text>
          </Link>
          <Link href='/'>
            <Text color='secondaryText' _hover={{color: 'secondary'}} fontSize='xs'>Contact</Text>
          </Link>
          <Link href='/'>
            <Text color='secondaryText' _hover={{color: 'secondary'}} fontSize='xs'>About</Text>
          </Link>
        </Flex>
        <Flex gap='1rem'>
          <Link href='/'>
            <Text color='secondaryText' _hover={{color: 'secondary'}} fontSize='xs'>FAQ</Text>
          </Link>
          <Link href='/'>
            <Text color='secondaryText' _hover={{color: 'secondary'}} fontSize='xs'>Visit our sites</Text>
          </Link>
          <Button variant='primary' h='1.2rem' borderRadius='lg' fontSize='.65rem' >Suscribe to newsletter</Button>
        </Flex>
      </Flex>
      <Divider color='secondary' marginY='3rem' />
      <Flex flexDir='column' gap='.8rem' w='max' justify='center'>
        <Flex justify='space-evenly' maxW='40rem'>
          <Button as='a' color='secondaryText' _hover={{color:'secondary'}} href='/' variant='' leftIcon={<FaFacebook size='20'/>} />
          <Button as='a' color='secondaryText' _hover={{color:'secondary'}} href='/' variant='' leftIcon={<FaTwitter size='20'/>} />
          <Button as='a' color='secondaryText' _hover={{color:'secondary'}} href='/' variant='' leftIcon={<FaLinkedin size='20'/>} />
          <Button as='a' color='secondaryText' _hover={{color:'secondary'}} href='/' variant='' leftIcon={<FaWhatsapp size='20'/>} />
        </Flex>
        <Text fontSize={{base:'.8rem', md:'md'}} color='secondaryText' fontWeight='bold' margin='0 auto' >Copyright © AnimeMe. All Rights Reserved</Text>
      </Flex>
    </Flex>
  )
}

export default MyFooter;