'use client';

import { Box, Button, Divider, Flex, FormControl, FormLabel, IconButton, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { RiDropFill, RiFolderDownloadFill, RiHandHeartFill, RiListSettingsFill, RiMessage3Fill } from 'react-icons/ri';

const navContentHover = css`
  &:hover > .nav-content {
    visibility: visible;
    opacity: 1;
    user-select: auto;
    transform: translateX(.5rem);
    transition: .2s ease-in-out !important;
  }
  &:hover > .arrow {
    transform: rotateZ(45deg);
    transition: 0;
  }
  &:hover > .icon {
    background: #0E0E0E;
    transition: .2s ease-in-out !important;
  }`

export default function SettingsPage({
    children
  }:{
    children: React.ReactNode
  }) {
  return (
    <main style={{minHeight:'100vh'}}>
      <Text as='h2' fontSize='4xl' color='secondary' w='max' pt='2rem' m='0 auto'>Notification</Text>
      <Flex flexDir={{base:'column',md:'row'}} w={{base:'full',md:'70vw'}} minW={{base:'full',md:'45rem'}} m='0 auto'>
        <Flex flexDir={{base:'row',md:'column'}} gap='.5rem' bg='onSurface' borderRadius='.5rem' m='1rem' mt={{base:'1rem',md:'3.75rem'}}>
          <Flex className='nav-btn' as='button' flexDir='column' position='relative' justify='center' align='center' p='.25rem' 
          css={navContentHover}>
            <Flex className='icon' padding='.5rem' width='2.5rem' height='2.5rem' justify='center' align='center' borderRadius='.5rem'>
              <RiListSettingsFill size='25' color='#AAAAAA' />
            </Flex>
            <Flex className='nav-content' position='absolute' zIndex='5' left='120%' align='center' visibility='hidden' opacity='0' userSelect='none'>
              <Box className='' h='.75rem' w='.75rem' bg='primary' transform='rotateZ(45deg)' mr='-1rem' ></Box>
              <Text className='' position='absolute' left='calc(120% + .35rem)' color='white' bg='primary' borderRadius='md' p='.25rem .75rem' fontSize='sm' w='max' >AnimeMe</Text>
            </Flex>
          </Flex>
          <Flex className='nav-btn' as='button' flexDir='column' position='relative' justify='center' align='center' p='.25rem' 
          css={navContentHover}>
            <Flex className='icon' padding='.5rem' width='2.5rem' height='2.5rem' justify='center' align='center' borderRadius='.5rem'>
              <RiDropFill size='25' color='#AAAAAA' />
            </Flex>
            <Flex className='nav-content' position='absolute' zIndex='5' left='120%' align='center' visibility='hidden' opacity='0' userSelect='none'>
              <Box className='' h='.75rem' w='.75rem' bg='primary' transform='rotateZ(45deg)' mr='-1rem' ></Box>
              <Text className='' position='absolute' left='calc(120% + .35rem)' color='white' bg='primary' borderRadius='md' p='.25rem .75rem' fontSize='sm' w='max' >Drops & Comments</Text>
            </Flex>
          </Flex>
          <Flex className='nav-btn' as='button' flexDir='column' position='relative' justify='center' align='center' p='.25rem' 
          css={navContentHover}>
            <Flex className='icon' padding='.5rem' width='2.5rem' height='2.5rem' justify='center' align='center' borderRadius='.5rem'>
              <RiMessage3Fill size='25' color='#AAAAAA' />
            </Flex>
            <Flex className='nav-content' position='absolute' zIndex='5' left='120%' align='center' visibility='hidden' opacity='0' userSelect='none'>
              <Box className='' h='.75rem' w='.75rem' bg='primary' transform='rotateZ(45deg)' mr='-1rem' ></Box>
              <Text className='' position='absolute' left='calc(120% + .35rem)' color='white' bg='primary' borderRadius='md' p='.25rem .75rem' fontSize='sm' w='max' >Messages</Text>
            </Flex>
          </Flex>
          <Flex className='nav-btn' as='button' flexDir='column' position='relative' justify='center' align='center' p='.25rem' 
          css={navContentHover}>
            <Flex className='icon' padding='.5rem' width='2.5rem' height='2.5rem' justify='center' align='center' borderRadius='.5rem'>
              <RiFolderDownloadFill size='25' color='#AAAAAA' />
            </Flex>
            <Flex className='nav-content' position='absolute' zIndex='5' left='120%' align='center' visibility='hidden' opacity='0' userSelect='none'>
              <Box className='' h='.75rem' w='.75rem' bg='primary' transform='rotateZ(45deg)' mr='-1rem' ></Box>
              <Text className='' position='absolute' left='calc(120% + .35rem)' color='white' bg='primary' borderRadius='md' p='.25rem .75rem' fontSize='sm' w='max' >Updates</Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir='column' gap='.5rem' p='calc(.5vw + .75rem)' w='full'>
          <Flex as='a' href='/' align='center' gap='1rem' w='100%' p='.25rem' pl={{base:'.5rem',md:'2rem'}} bg='onSurface' borderRadius='.5rem' _hover={{bg:'#282828', transition:'.2s ease-in-out !important'}}>
            <Image src='/images/light01.jpg' alt='DP' w='3rem' h='3rem' minW='3rem' minH='3rem' borderRadius='50%' objectFit='cover' />
            <Flex flexDir='column'>
              <Text fontSize='.8rem' h='max' w='100%'>
                <Text color='primary' mr='.25rem'>MiChochoProgrammer commented</Text>
                <Text color='secondary' noOfLines='1'>Yeah, I totally agree with you on Itachi isn't the strongest Naruto c totally agree with you on Itachi isn't the strongest Naruto character</Text>
              </Text>
              <Text fontSize='.65rem' color='white'>2days ago</Text>
            </Flex>
            <Image src='/images/light01.jpg' alt='DP' display={{base:'none',sm:'block'}} w='5.5rem' h='4rem' minW='5.5rem' minH='4rem' borderRadius='sm' objectFit='cover' />
          </Flex>

          <Flex as='a' href='/' align='center' gap='1rem' w='100%' p='.25rem' pl={{base:'.5rem',md:'2rem'}} bg='onSurface' borderRadius='.5rem' _hover={{bg:'#282828', transition:'.2s ease-in-out !'}}>
            <Image src='/images/light01.jpg' alt='DP' w='3rem' h='3rem' minW='3rem' minH='3rem' borderRadius='50%' objectFit='cover' />
            <Flex flexDir='column'>
              <Text fontSize='.8rem' h='max' w='100%'>
                <Text color='primary' mr='.25rem'>MiChochoProgrammer commented</Text>
                <Text color='secondary' noOfLines='1'>Yeah, I totally agree with you on Itachi isn't the strongest Naruto c totally agree with you on Itachi isn't the strongest Naruto character</Text>
              </Text>
              <Text fontSize='.65rem' color='white'>2days ago</Text>
            </Flex>
            <Image src='/images/light01.jpg' alt='DP' display={{base:'none',sm:'block'}} w='5.5rem' h='4rem' minW='5.5rem' minH='4rem' borderRadius='sm' objectFit='cover' />
          </Flex>

          <Flex as='a' href='/' align='center' gap='1rem' w='100%' p='.25rem' pl={{base:'.5rem',md:'2rem'}} bg='onSurface' borderRadius='.5rem' _hover={{bg:'#282828', transition:'.2s ease-in-out !'}}>
            <Image src='/images/light01.jpg' alt='DP' w='3rem' h='3rem' minW='3rem' minH='3rem' borderRadius='50%' objectFit='cover' />
            <Flex flexDir='column'>
              <Text fontSize='.8rem' h='max' w='100%'>
                <Text color='primary' mr='.25rem'>MiChochoProgrammer commented</Text>
                <Text color='secondary' noOfLines='1'>Yeah, I totally agree with you on Itachi isn't the strongest Naruto c totally agree with you on Itachi isn't the strongest Naruto character</Text>
              </Text>
              <Text fontSize='.65rem' color='white'>2days ago</Text>
            </Flex>
            <Image src='/images/light01.jpg' alt='DP' display={{base:'none',sm:'block'}} w='5.5rem' h='4rem' minW='5.5rem' minH='4rem' borderRadius='sm' objectFit='cover' />
          </Flex>

          <Flex as='a' href='/' align='center' gap='1rem' w='100%' p='.25rem' pl={{base:'.5rem',md:'2rem'}} bg='onSurface' borderRadius='.5rem' _hover={{bg:'#282828', transition:'.2s ease-in-out !'}}>
            <Image src='/images/light01.jpg' alt='DP' w='3rem' h='3rem' minW='3rem' minH='3rem' borderRadius='50%' objectFit='cover' />
            <Flex flexDir='column'>
              <Text fontSize='.8rem' h='max' w='100%'>
                <Text color='primary' mr='.25rem'>MiChochoProgrammer commented</Text>
                <Text color='secondary' noOfLines='1'>Yeah, I totally agree with you on Itachi isn't the strongest Naruto c totally agree with you on Itachi isn't the strongest Naruto character</Text>
              </Text>
              <Text fontSize='.65rem' color='white'>2days ago</Text>
            </Flex>
            <Image src='/images/light01.jpg' alt='DP' display={{base:'none',sm:'block'}} w='5.5rem' h='4rem' minW='5.5rem' minH='4rem' borderRadius='sm' objectFit='cover' />
          </Flex>
        </Flex>
       </Flex>
    </main>
  )
};