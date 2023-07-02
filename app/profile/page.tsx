'use client';

import { Button, Divider, Flex, FormControl, FormLabel, Image, Input, InputGroup, Text } from "@chakra-ui/react";
import React from "react";
import { HiCheckBadge } from "react-icons/hi2";
import { RiHeartsFill, RiMessage3Fill, RiUserFollowFill } from "react-icons/ri";

export default function ProfilePage({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Flex m='2rem 0' flexDir={{base:'column',msm:'row'}} gap={{base:'',sm:'1rem',md:'2rem'}} p={{base:'.5rem',msm:''}} pr={{base:'',msm:'1vw'}}>
        <Flex justify='start' flexDir='column' gap='1rem' h='max' w={{base:'full',msm:'16rem'}} bg='onSurface' p='2rem' borderRadius='md'>
          <Image src='/images/light01.jpg' alt='DP' h='10rem' w='10rem' minH='10rem' minW='10rem' borderRadius='50%' outline='4px solid #5F4BB6' objectFit='cover' m='0 auto' />
          <Text fontSize='2xl' color='secondary' w='max' m='0 auto'>MikeyChocho</Text>
          <Flex flexDir='column' gap='.15rem' align='center' w='85%' m='0 auto'>
            <Flex textAlign='center' w='full' gap='.15rem' bg='#141414' p='.25rem .5rem' borderRadius='md'>
              <HiCheckBadge color='#848484' size='14'/>
              <Text color='secondary' fontSize='.7rem' mr='1rem' w='full' textAlign='left'>Badges:</Text>
              <Text color='primary' fontSize='.7rem'>40</Text>
            </Flex>
            <Flex textAlign='center' w='full' gap='.15rem' bg='#141414' p='.25rem .5rem' borderRadius='md'>
              <RiUserFollowFill color='#848484' size='14'/>
              <Text color='secondary' fontSize='.7rem' mr='1rem' w='full' textAlign='left'>Following:</Text>
              <Text color='primary' fontSize='.7rem'>4</Text>
            </Flex>
            <Flex textAlign='center' w='full' gap='.15rem' bg='#141414' p='.25rem .5rem' borderRadius='md'>
              <RiMessage3Fill color='#848484' size='14'/>
              <Text color='secondary' fontSize='.7rem' mr='1rem' w='full' textAlign='left'>Comments:</Text>
              <Text color='primary' fontSize='.7rem'>32</Text>
            </Flex>
            <Flex textAlign='center' w='full' gap='.15rem' bg='#141414' p='.25rem .5rem' borderRadius='md'>
              <RiHeartsFill color='#848484' size='14'/>
              <Text color='secondary' fontSize='.7rem' mr='1rem' w='full' textAlign='left'>Likes:</Text>
              <Text color='primary' fontSize='.7rem'>56</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex w='full' flexDir='column' gap='1rem'>
          <Flex flexDir='column' w='full' gap='1rem' bg='onSurface' p={{base:'1rem',md:'2rem'}} borderRadius='md' >
            <Text as='h3' fontSize='2xl' fontWeight='600' w='max' color='secondary'>Personal Information</Text>
            <FormControl as='form' method='POST'>
              <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
                <FormLabel as='label' color='secondary' w='5rem'>Full name</FormLabel>
                <Input variant='primary' placeholder='Emmanuel Michael' type='text' name='fullname' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
              </Flex>
              <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
                <FormLabel as='label' color='secondary' w='5rem'>Email</FormLabel>
                <Input variant='primary' placeholder='michochoprogrammer@gmail.com' type='email' name='email' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
              </Flex>
              <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
                <FormLabel as='label' color='secondary' w='5rem'>Alais</FormLabel>
                <Input variant='primary' placeholder='Mikey Chocho' type='text' name='alais' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
              </Flex>
              <Button variant='outline' size='sm' type='submit' float='right' mr='.5rem' borderRadius='md'>Update</Button>
            </FormControl>
          </Flex>
          <Flex w='full' flexDir='column' gap='1rem'>
            <Button variant='warning' borderRadius='md'>Deactivate account temporarily</Button>
            <Button variant='danger' borderRadius='md'>Delete account permanently</Button>
          </Flex>
        </Flex>
      </Flex> 
    </main>
  )
}