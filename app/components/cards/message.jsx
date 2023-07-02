import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Flex, Box, IconButton, Text, ButtonGroup, Button } from '@chakra-ui/react';
import { RiCloseLine } from 'react-icons/ri';

const FlashMessage = ({text, color, bgColor, timeout}) => {
  return (
    <Flex 
        bg={bgColor || 'white'} 
        position='fixed' 
        w={{base: '80vw', sm: '30rem'}}
        justify='center'
        flexDir='column'
        p={{base: '.5rem', md: '1rem'}}
        m='0 auto'
        borderRadius='md'
        boxShadow='0 0 15px 2px rgba(255, 255, 255, .1)'
    >
        <Text variant='' color={color || 'black'} fontWeight='bold'>{text} This is the warning text from earlier dumbass!!</Text>
        <Button variant='outline' rightIcon={<RiCloseLine size='20px' />} w='full' fontSize='md' >Close</Button>
    </Flex>
  )
}

export default FlashMessage;