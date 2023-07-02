'use client';
/* eslint-disable */

import { Flex, Text, ButtonGroup, Button, Link, Image } from "@chakra-ui/react";
import { RiArrowRightLine } from 'react-icons/ri';
import { GiDiamonds } from 'react-icons/gi';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SmallAnimeCard from './components/cards/smallCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const images = [
  '/images/light01.jpg',
  '/images/light01.jpg',
  '/images/light01.jpg',
  '/images/light01.jpg',
]
export default function LandingPage({
    children
  }:{
    children: React.ReactNode
  }) {
    return (
    <main>
      {/* TOAST MESSAGE */}
      <ToastContainer position='top-center' theme='dark' />

      <Flex flexDir='column' w='full' minH='100vh' justify='center' gap='2rem' padding={{base:'3rem 5vw 0 5vw', md:'3rem 10vw 0 10vw'}}>
        <Text as='h1' fontSize={{base:'5xl', md:'6xl'}} fontWeight='600' lineHeight={{base:'1.2', md:'1.4'}} color='white' textAlign={{base:'left', md:'center'}}>Discover, Discuss, and Dive into the World of Anime.</Text>
        <Text as='h2' fontSize={{base:'md', md:'xl'}} color='secondary' textAlign={{base:'left', md:'center'}}>Welcome to AnimeMe, your ultimate destination for anime reviews and discussions. Step into a world where vibrant characters, thrilling stories, and epic adventures await.</Text>
        <ButtonGroup w='max' m={{base:'0', md:'0 auto'}}>
          <Button variant='primary' size='md' w={{base: '10rem', md:'12rem'}} rightIcon={<RiArrowRightLine />} borderRadius='lg'>Start Exploring</Button>
          <Button variant='outline' size='md' w={{base: '10rem', md:'12rem'}} borderRadius='lg'>Earn Badges</Button>
        </ButtonGroup>
        <Button as='a' href='/' variant='' color='primary' outline='1px solid #5F4BB6' bg='none' borderRadius='5rem' fontWeight='600' w='max' m={{base:'0', md:'0 auto'}} textAlign={{base:'left', md:'center'}} _hover={{boxShadow:'0 0 2px 4px #FFFFFF30'}}>An absolute must-visit for all anime fans!</Button>
        <Text outline='1px solid #292929' p='.875rem' fontSize='.75rem' color='secondaryText' borderRadius='lg' >At AnimeMe, to ensure a welcoming environment, we expect all members to engage with kindness, empathy, and respect. Please refrain from harassment, discrimination, offensive language, spoilers, or explicit content. Let's foster constructive discussions and embrace the love for anime together. See <Link href='/' color='primary'>rules & regulations</Link> to know more on our code of conduct</Text>
      </Flex>
      <Flex position='relative' w='full' flexDir='column' minH='calc(max + 2rem)' h='100vh'  bg='linear(to-r, #1C1C1C, transparent)' gap='1rem' justify='center' p={{base:'0 calc(2vw + 1rem)', md:'0 calc(5vw + 3rem)'}}>
        <Image aria-label="background image" src='/images/allAnime01.jpg' position='absolute' top='0' right='0' zIndex='-1' alt='All Anime Image' w='full' h='100%' objectFit='cover' opacity='.05' filter='grayscale(1)' />
        <Text as='h2' fontSize='4xl' color='white' w='max' m='0 auto'>About Us</Text>
        <Flex flexDir='column' maxW='50rem' m='0 auto' gap='calc(1vh + .85rem)'>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>Our mission is to provide comprehensive and insightful reviews that empower anime enthusiasts like you to make informed viewing choices.</Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>You can embark on a journey where the enjoyment of anime goes beyond mere entertainment. Our dedicated team of reviewers immerses themselves in the intricate storytelling, stunning animation, and compelling characters that make each series unique. </Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>We carefully analyze plot developments, thematic elements, and artistic techniques to bring you in-depth critiques that capture the essence of every anime we review.</Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>But it's not just about analysis and evaluation; it's about sharing the joy of anime. Through our reviews, we aim to ignite the same excitement and passion that anime sparks within us. </Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>We believe that anime has the power to inspire, connect, and resonate with audiences on a profound level, and we want to share that joy with you.</Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>Whether you're seeking recommendations for your next anime marathon or hoping to engage in lively discussions with fellow fans, ReviewMe is your trusted companion.</Text>
          </Flex>
          <Flex maxW='60rem'>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>Join our vibrant community, where we celebrate the artistry, creativity, and boundless imagination of anime. Let's explore, discover, and revel in the sheer delight of this captivating medium together.</Text>
          </Flex>
          <Flex maxW='60rem' mb={{base:'5rem', md:'0'}}>
            <GiDiamonds color='white' width='1rem'/>
            <Text color='white' fontSize='sm' w='98%' paddingLeft='.5rem'>Unleash your passion for anime with ReviewMe and experience the limitless enjoyment it brings.</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDir='column' p={{base:'0 calc(.5vw + .5rem)', md:'0 calc(4vw + 2rem)'}} gap='2rem'>
        <Text as='h2' fontSize='4xl' color='white' w='max' m='4rem auto 0'>Top Rated</Text>
        <Flex gap={{base:'1rem .438rem', md:'2rem .875rem'}} justify='space-evenly' flexWrap='wrap'>
          <Flex gap={{base:'1rem .438rem', md:'2rem .875rem'}} justify='space-evenly' flexWrap='wrap'>
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='One Piece' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Demon Slayer' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Hunter X Hunter' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Assasination Classroom' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Naruto: Shippuden' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='One Piece' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Demon Slayer' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Hunter X Hunter' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Assasination Classroom' rating='4' />
            <SmallAnimeCard imageSrc='/images/allAnime01.jpg' name='Naruto: Shippuden' rating='4' />
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};
