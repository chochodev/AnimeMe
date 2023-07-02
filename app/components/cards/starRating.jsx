'use client';
import React, { useState } from 'react';
import { Flex, Input } from '@chakra-ui/react';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

const StarRating = ({rating, color, size}) => {
  const starIcons = Array.from({length:rating}, (_, index) => (
    <RiStarFill key={index} size={size || '10'} color={color || '#FFD700'} />
  ));

  return (
    <Flex align='center'>
      {starIcons}
    </Flex>
  );
};

const StarRatingLIne = ({rating, color, size}) => {
  const starIcons = Array.from({length:rating}, (_, index) => (
    <RiStarLine key={index} size={size || '10'} color={color || '#FFD700'} />
  ));

  return (
    <Flex align='center'>
      {starIcons}
    </Flex>
  );
};

const CustomStarRating = ({size}) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <Flex>
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;

        return(
          <label cursor='pointer' key={index}>
            <Input 
              type='radio' 
              display='none' 
              name='rating' 
              value={currentRating} 
              onClick={()=>setRating(currentRating)}
            />
            <RiStarFill
              size={size || '20'}
              color={currentRating <= (rating || hover) ? '#FFD700' : '#E4E5E9'}
              onMouseEnter={()=>setHover(currentRating)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        )
      })}
    </Flex>
  )
}

export {StarRating, StarRatingLIne, CustomStarRating};