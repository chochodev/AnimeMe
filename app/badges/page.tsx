'use client';

import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { RiListCheck2, RiProfileFill, RiShieldStarFill } from "react-icons/ri";

const hexagonBeforeAfter = {
  content: '""',
  position: 'absolute',
  top: '.5rem',
  left: '.5rem',
  h: '100%',
  w: '100%',
  bg: '#5F4BB6',
}

export default function SettingsPage({
    children
  }:{
    children: React.ReactNode
  }) {
  return (
    <main>
      <Flex flexDir={{base:'column',md:'row'}} w='full'>
        <Flex flexDir={{base:'row',md:'column'}}>
          <Flex flexDir='column' gap='.5rem' p='.5rem'>
            <Flex gap='1rem' align='center' textAlign='center' p='.5rem' bg='onSurface' _hover={{bg:'#282828'}} w='15rem' borderRadius='.5rem'>
              <RiListCheck2 size='30' color='#AAAAAA'/>
              <Flex flexDir='column' h='full' textAlign='start'>
                <Text color='secondary' fontSize='sm'>Badges</Text>
                <Text color='secondaryText' fontSize='.65rem'>23 earned</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='.5rem' p='.5rem'>
            <Flex gap='1rem' align='center' textAlign='center' p='.5rem' bg='onSurface' _hover={{bg:'#282828'}} w='15rem' borderRadius='.5rem'>
              <HiCheckBadge size='30' color='#AAAAAA'/>
              <Flex flexDir='column' h='full' textAlign='start'>
                <Text color='secondary' fontSize='sm'>Earn badges</Text>
                <Text color='secondaryText' fontSize='.65rem'>512 available</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='.5rem' p='.5rem'>
            <Flex gap='1rem' align='center' textAlign='center' p='.5rem' bg='onSurface' _hover={{bg:'#282828'}} w='15rem' borderRadius='.5rem'>
              <RiShieldStarFill size='30' color='#AAAAAA'/>
              <Flex flexDir='column' h='full' textAlign='start'>
                <Text color='secondary' fontSize='sm'>Rank</Text>
                <Text color='secondaryText' fontSize='.65rem'>4/25 Intermidiate</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex flexDir='column' gap='.5rem' p='.5rem'>
            <Flex gap='1rem' align='center' textAlign='center' p='.5rem' bg='onSurface' _hover={{bg:'#282828'}} w='15rem' borderRadius='.5rem'>
              <RiProfileFill size='30' color='#AAAAAA'/>
              <Flex flexDir='column' h='full' textAlign='start'>
                <Text color='secondary' fontSize='sm'>Be a Reviewer</Text>
                <Text color='secondaryText' fontSize='.65rem'>availabel in 23hrs</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir='column' w='full'>
          <Text fontSize='4xl' color='secondary'>All Badges</Text>
          <Text fontSize='xl' color='secondary'>23</Text>
          <Flex flexWrap='wrap' gap='.5rem' p='1rem' w='full' justify='space-evenly'>
            <Flex flexDir='column' align='center' textAlign='center' position='relative' bg='onSurface' backdropBlur='5px' border='1px solid #AAAAAA' borderRadius='.5rem' p='1rem'>
                <Flex p='1rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bgImage='/images/gold-bg02.jpeg' bgRepeat='no-repeat' >
                <Flex p='.25rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bg='star' >
                  <Image src='/images/allAnime02.jpg' alt='DP' w='6rem' minW='6rem' h='6rem' minH='6rem' objectFit='cover' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' />
                </Flex>
              </Flex>
              <Text color='star' w='full' fontSize='md' fontWeight='600' p='.5rem 1rem' m='1rem' bg='surface' borderRadius='.5rem' textTransform='uppercase'>One Piece</Text>
            </Flex>
            <Flex flexDir='column' align='center' textAlign='center' position='relative' bg='onSurface' backdropBlur='5px' border='1px solid #AAAAAA' borderRadius='.5rem' p='1rem'>
                <Flex p='1rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bgImage='/images/gold-bg02.jpeg' bgRepeat='no-repeat' >
                <Flex p='.25rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bg='star' >
                  <Image src='/images/allAnime02.jpg' alt='DP' w='6rem' minW='6rem' h='6rem' minH='6rem' objectFit='cover' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' />
                </Flex>
              </Flex>
              <Text color='star' w='full' fontSize='md' fontWeight='600' p='.5rem 1rem' m='1rem' bg='surface' borderRadius='.5rem' textTransform='uppercase'>One Piece</Text>
            </Flex>
            <Flex flexDir='column' align='center' textAlign='center' position='relative' bg='onSurface' backdropBlur='5px' border='1px solid #AAAAAA' borderRadius='.5rem' p='1rem'>
                <Flex p='1rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bgImage='/images/gold-bg02.jpeg' bgRepeat='no-repeat' >
                <Flex p='.25rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bg='star' >
                  <Image src='/images/allAnime02.jpg' alt='DP' w='6rem' minW='6rem' h='6rem' minH='6rem' objectFit='cover' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' />
                </Flex>
              </Flex>
              <Text color='star' w='full' fontSize='md' fontWeight='600' p='.5rem 1rem' m='1rem' bg='surface' borderRadius='.5rem' textTransform='uppercase'>One Piece</Text>
            </Flex>
            <Flex flexDir='column' align='center' textAlign='center' position='relative' bg='onSurface' backdropBlur='5px' border='1px solid #AAAAAA' borderRadius='.5rem' p='1rem'>
                <Flex p='1rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bgImage='/images/gold-bg02.jpeg' bgRepeat='no-repeat' >
                <Flex p='.25rem' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' bg='star' >
                  <Image src='/images/allAnime02.jpg' alt='DP' w='6rem' minW='6rem' h='6rem' minH='6rem' objectFit='cover' clipPath='polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' />
                </Flex>
              </Flex>
              <Text color='star' w='full' fontSize='md' fontWeight='600' p='.5rem 1rem' m='1rem' bg='surface' borderRadius='.5rem' textTransform='uppercase'>One Piece</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </main>
  )
}