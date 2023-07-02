'use client';

import { Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";

export default function SettingsPage({
    children
  }:{
    children: React.ReactNode
  }) {
  return (
    <main>
      <Flex p={{base:'.5rem',md:'1vw'}} w='full'>
        <Flex flexDir='column' w='full' gap='1rem' bg='onSurface' p={{base:'1rem',md:'2rem'}} borderRadius='md' >
          <Text as='h3' fontSize='2xl' fontWeight='600' w='max' color='secondary'>Change Password</Text>
          <FormControl as='form' method='POST'>
            <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
              <FormLabel as='label' color='secondary' w='10rem'>Current Password</FormLabel>
              <Input variant='primary' id='password' placeholder='******' type='password' name='password' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
            </Flex>
            <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
              <FormLabel as='label' color='secondary' w='10rem'>New Password</FormLabel>
              <Input variant='primary' id='newPassword' placeholder='******' type='password' name='newPassword' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
            </Flex>
            <Flex flexDir={{base:'column',md:'row'}} w='full' align={{base:'',md:'center'}} justify='space-between' p='.5rem' pl='0' m='.25rem' ml='0'>
              <FormLabel as='label' color='secondary' w='10rem'>Confirm Password</FormLabel>
              <Input variant='primary' id='newPassword2' placeholder='******' type='password' name='newPassword2' w={{base:'full',md:'50vw'}} _placeholder={{color:'#848484'}} />
            </Flex>
            <Button variant='outline' size='sm' type='submit' float='right' mr='.5rem' borderRadius='md'>Update</Button>
          </FormControl>
        </Flex>
      </Flex>
    </main>
  )
}