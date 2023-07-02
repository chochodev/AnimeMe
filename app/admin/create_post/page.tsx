'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Flex, FormLabel, Grid, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Text, Textarea } from '@chakra-ui/react';
import { FaAppleAlt } from 'react-icons/fa';

const CreatePost = () => {
  return (
    <main>
        <Text as='h2' fontSize='2.25rem' fontWeight='600' color='secondary' w='max' m='0 auto'>Create Anime Post</Text>
        <Flex as='form' action='' m='0 auto' p='.25rem' flexDir='column' w={{base:'100%', md:'70vw', lg:'55vw'}}>
            <Flex flexDir='column' p={{base:'.25rem', md:'.5rem'}}>
                <FormLabel htmlFor='name' color='secondary' >Name</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={FaAppleAlt} size='25' color='secondary' />
                    </InputLeftElement>
                    <Input 
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Name...'
                        w='100%'
                        required 
                    />
                </InputGroup>
            </Flex>
            <Flex flexDir='column' p={{base:'.25rem', md:'.5rem'}}>
                <FormLabel htmlFor='genre' color='secondary' >Genre</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={FaAppleAlt} size='25' color='secondary' />
                    </InputLeftElement>
                    <Input 
                        id='genre'
                        name='genre'
                        type='text'
                        placeholder='Genre...'
                        w='100%'
                        required 
                    />
                </InputGroup>
            </Flex>
            <Flex flexDir='column' p={{base:'.25rem', md:'.5rem'}}>
                <FormLabel htmlFor='image' color='secondary' >Image</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={FaAppleAlt} size='25' color='secondary' />
                    </InputLeftElement>
                    <Input 
                        id='image'
                        name='image'
                        type='file'
                        placeholder='Image...'
                        w='100%'
                        required 
                    />
                </InputGroup>
            </Flex>
            <Flex flexDir='column' p={{base:'.25rem', md:'.5rem'}}>
                <FormLabel htmlFor='date' color='secondary' >Date Aired</FormLabel>
                <InputGroup>
                    <InputLeftElement>
                        <Icon as={FaAppleAlt} size='25' color='secondary' />
                    </InputLeftElement>
                    <Input 
                        id='date'
                        name='date'
                        type='date'
                        placeholder='Date Aired...'
                        w='100%'
                        required 
                    />
                </InputGroup>
            </Flex>

            <Flex>
                <Flex flexDir='column' w='50%' p={{base:'.25rem', md:'.5rem'}}>
                    <FormLabel htmlFor='pg' color='secondary' >PG</FormLabel>
                    <InputGroup>
                        <InputLeftElement>
                            <Icon as={FaAppleAlt} size='25' color='secondary' />
                        </InputLeftElement>
                        <Input 
                            id='pg'
                            name='pg'
                            type='number'
                            placeholder='PG...'
                            w='100%'
                            required 
                            />
                    </InputGroup>
                </Flex>
                <Flex flexDir='column' w='50%' p={{base:'.25rem', md:'.5rem'}}>
                    <FormLabel htmlFor='season' color='secondary' >Season</FormLabel>
                    <InputGroup>
                        <InputLeftElement>
                            <Icon as={FaAppleAlt} size='25' color='secondary' />
                        </InputLeftElement>
                        <Input 
                            id='season'
                            name='season'
                            type='number'
                            placeholder='Season...'
                            w='100%'
                            required 
                            />
                    </InputGroup>
                </Flex>
                <Flex flexDir='column' w='50%' p={{base:'.25rem', md:'.5rem'}}>
                    <FormLabel htmlFor='episode' color='secondary'>Episodes</FormLabel>
                    <InputGroup>
                        <InputLeftElement>
                            <Icon as={FaAppleAlt} size='25' color='secondary' />
                        </InputLeftElement>
                        <Input 
                            id='episode'
                            name='episode'
                            type='number'
                            placeholder='Episode...'
                            w='100%'
                            required 
                            />
                    </InputGroup>
                </Flex>
            </Flex>
            <Flex flexDir='column' p={{base:'.25rem', md:'.5rem'}}>
                <FormLabel htmlFor='desc' color='secondary' >Description</FormLabel>
                <InputGroup>
                    <Textarea 
                        id='desc'
                        name='desc'
                        placeholder='Description...'
                        w='100%'
                        border='none'
                        outline='1px solid #555555'
                        color='secondary'
                        _placeholder={{
                            color:'#555555'
                        }}
                        _focus={{
                            border:'none',
                            outline:'2px solid #5F4BB6'
                        }}
                        required 
                    />
                </InputGroup>
            </Flex>
            <Button w='100%' borderRadius='.5rem' m='1rem auto'>Create Post</Button>
            
        </Flex>
    </main>
  )
}

export default CreatePost