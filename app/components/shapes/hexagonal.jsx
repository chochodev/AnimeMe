'use client';

import { Box } from '@chakra-ui/react';

const Hexagon = ({color}) => {
  return (
    <Box
      top='0'
      left='0'
      position='absolute'
      margin='0 auto'
      bg='dodgerblue'
      borderRadius='10px'
      width='100px'
      height='63px'
      boxSizing='border-box'
      transition='all 1s'
      borderWidth='0.4vh'
      borderColor='transparent'
      _before={{
        content: '""',
        border: 'inherit',
        position: 'absolute',
        top: '-0.5vh',
        left: '-0.5vh',
        bg: 'dodgerblue',
        borderRadius: 'inherit',
        height: '100%',
        width: '100%',
        transform: 'rotate(60deg)',
      }}
      _after={{
        content: '""',
        border: 'inherit',
        position: 'absolute',
        top: '-0.5vh',
        left: '-0.5vh',
        bg: 'dodgerblue',
        borderRadius: 'inherit',
        height: '100%',
        width: '100%',
        transform: 'rotate(-60deg)',
      }}
    />
  );
};

export default Hexagon;