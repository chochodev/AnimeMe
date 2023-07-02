'use client';

import { Box, Button, Flex, Icon, IconButton, Image, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { RiCloseLine, RiFileTextFill, RiHome3Fill, RiLogoutBoxLine, RiMenu4Fill, RiNotification2Fill, RiSettings6Fill, RiUser3Fill } from 'react-icons/ri';
import { HiCheckBadge } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './cards/logo';
import SignPage from './signup';
import axios from 'axios';
import { BASE_URL } from '../api/config';
import { handleSignOut } from '../api/account/authentication';

const MyNavbar = () => {
  // STATE FOR HAMBURGER MENUBAR TOGGLE
  const [menubar, setMenubar] = useState(false);
  const toggleMenubar = () => {
    setMenubar(!menubar);
  };

  // STATE FOR SEARCH BAR IN SMALL SCREENS
  const [searchBar, showSearchBar] = useState(true);
  const [search, toggleSearchBar] = useState(false);


  // STATE FOR SIGNIN FORM TOGGLE
  const [showSignState, setShowSignState] = useState(false);
  const closeSignState = () => setShowSignState(false);

  // STATE FOR CSRF-TOKEN
  const [csrfToken, setCsrfToken] = useState('');

  return (
    <Flex as='header' position='relative' w='full' bg='onSurface' gap='1rem' align='center' justify='space-between' p={{md:'.8rem 1rem', base:'.6rem .5rem'}} h='max-content'>
      {showSignState && <SignPage handleCloseSignState={closeSignState} />}

      {/* FOR LOGO */}
      <Flex align='center' p={{md:'.2rem .8rem', base:'.2rem'}}>
        <Logo myWidth='5rem' myHeight='2rem' mdWidth='8rem' mdHeight='2rem' />
      </Flex>

      {/* FOR SEARCH BAR */}
      <Flex w='full' position='relative'>
        {/* FOR SMALL SCREEN SEARCH BAR */}
        {showSearchBar && 
          <IconButton variant='' display={{base: 'flex', sm: 'none'}} onClick={()=>toggleSearchBar(!search)} icon={search? <RiCloseLine /> : <FaSearch />} color='white' _hover={{bg:'#292929', transition:'.25s'}}></IconButton>
        }

        <AnimatePresence>
        {search && (
          <motion.div
            initial={{ opacity: 0, width: '100vw', position: 'fixed', left: 0}}
            animate={{ opacity: 1, top: '4rem'}}
            exit={{ opacity: 0, width: 0, top: 0 }}
            transition={{ duration: .25, ease: 'easeInOut', delay: .25 }}
          >
            <InputGroup display={{base: 'flex', sm: 'none'}} w='80%' m='0 auto' boxShadow='0 0 20px 5px rgba(255, 255, 255, .1)'>
              <Input variant='primary' placeholder='Search...' />
              <InputLeftElement>
                <Icon as={FaSearch} color='secondary' size='lg'/>
              </InputLeftElement>
            </InputGroup>
          </motion.div>
        )}
        </AnimatePresence>

        {/* FOR LARGE SCREEN SEARCH BAR */}
        <InputGroup display={{base: 'none', sm: 'flex'}} w='40vw' minW='6rem'>
          <Input variant='primary' placeholder='Search...' />
          <InputLeftElement>
            <Icon as={FaSearch} color='secondary' size='lg'/>
          </InputLeftElement>
        </InputGroup>
      </Flex>
      
      {/* FOR SIGNIN BUTTON */}
      <Flex gap='5px' align='center' h='tall'>
        <Button size='xs' variant='primary' onClick={()=>setShowSignState(true)}>Sign In</Button>
      </Flex>

      {/* FOR MENUBAR BUTTON */}
      <Flex>
        <IconButton icon={!menubar? <RiMenu4Fill size='sm'/> : <RiCloseLine size='sm'/>} h='2.2rem' w='2.2rem' p='0' variant='' color='secondary' _hover={{bg:'#292929', transition:'.25s ease-in-out !important'}} _active={{color:'#040404'}} onClick={toggleMenubar} />
        <AnimatePresence>
          {menubar && (
          <motion.div
            initial={{ opacity: 0, scale: 0, transform: 'translateY(0)' }}
            animate={{ opacity: 1, scale: 1, transform: 'translateY(calc(100% - .75rem))' }}
            exit={{ opacity: 0, scale: 0, transform: 'translateY(0)' }}
          >
          <Box 
            position='absolute' 
            top={{md:'calc(100% - .5rem)', base:'calc(100% - .8rem)'}} 
            borderRadius='md' 
            bg='onSurface'
            right='.8rem' 
            boxShadow='0 0 2px 1px rgba(0, 0, 0, 0.5)'
            overflow='hidden'
          >
            <motion.div
              initial={{ opacity: 0, transform: 'translateX(1rem)' }}
              animate={{ opacity: 1, transform: 'translateX(0)' }}
              exit={{ opacity: 0, transform: 'translateX(1rem)' }}
              transition={{duration: .25, ease: 'easeInOut', delay: .25}}
            >
            <Box 
              w='12rem' 
              paddingTop='.5rem'
              bg='onSurface' 
              transition='.25s ease-in-out !important'
            >
              <Flex as='a' href='/' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <RiHome3Fill h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs' variant='primary'>Home</Text>
              </Flex>
              <Flex as='a' href='/profile' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <RiUser3Fill h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs'>Profile</Text>
              </Flex>
              <Flex as='a' href='/notification' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <RiNotification2Fill h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs'>Notification</Text>
              </Flex>
              <Flex as='a' href='/settings' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <RiSettings6Fill h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs'>Settings</Text>
              </Flex>
              <Flex as='a' href='/badges' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <HiCheckBadge h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs'>Earn Badges</Text>
              </Flex>
              <Flex as='a' href='/manga' w='full' align='center' p='.55rem .8rem' gap='.15rem' _hover={{bg:'#84848430', transition:'.25s ease-in-out !important'}}>
                <RiFileTextFill h='1.5rem' w='1.5rem' color='#848484'/>
                <Text color='secondaryText' fontSize='xs'>Manga</Text>
              </Flex>
            </Box>
            </motion.div>
              <Flex w='full' align='center' p='.55rem .8rem' gap='.15rem' bg='surface' borderRadius='0 0 5px 5px'>
                <RiLogoutBoxLine h='1.5rem' w='1.5rem' color='#848484'/>
                <Text as='button' onClick={()=>handleSignOut(csrfToken)} color='secondaryText' fontSize='xs'>Logout</Text>
              </Flex>
          </Box>
          </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Flex>
  )
}

export default MyNavbar;