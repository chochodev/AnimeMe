import React from 'react';
import { Flex, Text, Image, Box } from '@chakra-ui/react';
import {StarRating, StarRatingLIne} from './starRating';
import { RiStarLine } from 'react-icons/ri';

const SmallAnimeCard = ({ shadowColor, name, nameColor, textBg, rating, starSize, imageSrc, link, baseText, mdText }) => {
  // console.log(typeof(rating));
  const starEmpty = Array.from({length: 5-Number(rating)}, (_, index) => (
    <RiStarLine key={index} size={starSize || '10'} color='#FFD700' />
  ))

  return (
    <Flex as='a' href={link || '/'} w={{base:'10rem', md:'12rem'}} minW={{base:'10rem', md:'12rem'}} h={{base:'14rem', md:'18rem'}} minH={{base:'14rem', md:'18rem'}} bg={textBg || '#000000'} flexDir='column' borderRadius='.5rem' overflow='hidden' boxShadow='0 0 2px 2px #FFFFFF10' _hover={{transform: 'scale(1.02)', boxShadow: '0 0 2px 4px #FFFFFF30'}} transition='.2s ease-in-out'>
      <Image src={imageSrc} alt={name} w='full' h='90%' objectFit='cover' borderRadius='.5rem .5rem 0 0'/>
      <Flex flexDir='column' p='.5rem'>
        <Flex gap='.5rem'>
          <Text color='secondary' fontSize='xs'>Rating:</Text>
          <Flex align='center'>
            <StarRating size={starSize || '10'} rating={rating}/>
            {starEmpty}
          </Flex>
        </Flex>
        <Text fontSize={{base:baseText, md:mdText}} noOfLines='1' color={nameColor || 'white'}>{name}</Text>
      </Flex>
    </Flex>
  )
}

export default SmallAnimeCard;