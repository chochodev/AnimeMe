import React, { useEffect, useState } from "react";
import { Button, Checkbox, Flex, FormControl, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";
import Logo  from './cards/logo';
import { RiCloseLine, RiKey2Fill, RiMailFill, RiUser4Fill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';
import { handleSignUp, handleSignIn } from '../api/account/authentication';

const SignPage = ({handleCloseSignState}) => {
  const [signState, setSignState] = useState(false);
  const toggleSignState = () => setSignState(!signState);
  console.log('is it???')

  const [csrfToken, setCsrfToken] = useState('');

  // FOR SIGN UP FUNCTION
  const SubmitSignUpForm = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      username: e.target.username.value,
      password: e.target.password.value,
    }

    handleSignUp(data, csrfToken);
  
    e.target.email.value = ''
    e.target.username.value = ''
    e.target.password.value = ''
    e.target.password2.value = ''
  }

  // FOR SIGN IN FUNCTION
  const SubmitSignInForm = (e) => {
    e.preventDefault();
    const data = {
      email_or_username: e.target.email_or_username.value,
      password: e.target.password.value,
    }

    handleSignIn(data, csrfToken);
  
    e.target.email_or_username.value = ''
    e.target.password.value = ''
  }

  return (
    <Flex position='fixed' zIndex='20' top='0' left='0' bg='#0E0E0EB0' h='full' w='full' justify='right'>
      <Flex flexDir='column' align='center' h='full' p='1.5rem' bg='onSurface'>
        <Flex position='relative' top='0' w='full' h='0'>
          <Button as='button' position='absolute' top='-1.5rem' right='-1.5rem' variant='' h='2.5rem' w='2.5rem' p='0' m='.2rem' borderRadius='50%' _hover={{bg:'#282828'}} onClick={handleCloseSignState}>
            <RiCloseLine size='25' color='#AAAAAA' />
          </Button>
        </Flex>
        <Flex justify='center' w='full'>
          <Logo myWidth='10rem'/>
        </Flex>

        <AnimatePresence>
        {signState && ( 
          <motion.div
            initial={{ opacity: 0, transform: 'translateX(1rem)' }}
            animate={{ opacity: 1, transform: 'translateX(0)' }}
            transition={{duration: .25, ease: 'easeInOut', delay: .25}}
          >
          <Flex flexDir='column' gap='.5rem' mt='1rem'>
            <Text fontSize='xl' color='white'>Sign Up</Text>            
            <FormControl as='form' onSubmit={SubmitSignUpForm} method='POST'>
              <Flex flexDir='column' gap='.5rem' w='full'>
                <InputGroup>
                  <InputLeftElement>
                    <RiMailFill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input type='email' placeholder='Email' name='email' id='signup-email' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <RiUser4Fill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input type='text' placeholder='Username' name='username' id='signup-username' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <RiKey2Fill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input placeholder='Password' type='password' name='password' id='signup-password' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <RiKey2Fill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input placeholder='Confirm password' type='password' name='password2' id='signup-password2' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
              </Flex>
              <Flex my='1rem' gap='.25rem'>
                <Checkbox name='privacy-check' required />
                <Text fontSize='xs' color='secondary'>I have read and agree to the <Text as='a' href='/' variant='' color='primary'>terms and conditions</Text>.</Text>
              </Flex>
              <Button as='button' type='submit' variant='primary' w='full' size='sm' borderRadius='md'>Sign Up</Button>
            </FormControl>
            <Text fontSize='xs' color='secondary' w='max' m='2rem auto'>Already have an account? <Text as='button' onClick={toggleSignState} color='primary'>Sign in</Text> now.</Text>
          </Flex>
          </motion.div>
        )}
        </AnimatePresence>

        <AnimatePresence>
        {!signState && (
          <motion.div
            initial={{ opacity: 0, transform: 'translateX(1rem)' }}
            animate={{ opacity: 1, transform: 'translateX(0)' }}
            transition={{duration: .25, ease: 'easeInOut', delay: .25}}
          >
          <Flex flexDir='column' gap='.5rem' mt='1rem'>
            <Text fontSize='xl' color='white'>Sign In</Text>
            <FormControl as='form' onSubmit={SubmitSignInForm} method='POST'>
              <Flex flexDir='column' gap='.5rem' w='full'>
                <InputGroup>
                  <InputLeftElement>
                    <RiMailFill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input placeholder='Email or Username' name='email_or_username' id='signin-email' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement>
                    <RiKey2Fill color='#AAAAAA' />
                  </InputLeftElement>
                  <Input type='password' placeholder='Password' name='password' id='signin-password' maxW='30rem' _placeholder={{opacity:'.25',fontSize:'.8rem'}} />
                </InputGroup>
              </Flex>
              <Flex my='1rem' gap='.25rem'>
                <Text fontSize='xs' color='secondary'>Forgot password? <Text as='a' href='/' variant='' color='primary'>Reset password</Text>.</Text>
              </Flex>
              <Button as='button' type='submit' variant='primary' w='full' size='sm' borderRadius='md'>Sign In</Button>
            </FormControl>
            <Text fontSize='xs' color='secondary' w='max' m='2rem auto'>Don′t have an account? <Text as='button' variant='' onClick={toggleSignState} color='primary'>Sign up</Text> now.</Text>
          </Flex>
          </motion.div>
        )}
        </AnimatePresence>
      </Flex>
    </Flex>
  );
};

export default SignPage;