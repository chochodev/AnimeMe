'use client';

import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/cards/logo";

export default function SettingsPage({
    children
  }:{
    children: React.ReactNode
  }) {
  return (
    <main>
      <Flex flexDir={{base:'column', lg:'row'}}>
        <Flex position='relative' minH='100vh' w='full' bgGradient='radial(#1C1C1C, #000000)'>
          <Image src='/images/allAnime02.jpg' alt='All Anime' position='absolute' top='0' right='0' h='full' w='full' objectFit='cover' filter='grayscale(1)' opacity='.1' />
          <Flex h='full' w='full' flexDir='column' align='center' textAlign='center' justify='top' p='5rem' gap='1rem'>
            <Text as='h2' fontSize='5xl' fontWeight='500' color='secondary'>About <Logo myHeight='3rem' myWidth='12rem' mdHeight='4rem' mdWidth='14rem' /></Text>
            <Text as='h3' fontSize='md' color='secondary' >Unleashing the Power of Anime Reviews.</Text>
          </Flex>
        </Flex>
        <Flex flexDir='column' gap='1rem' textAlign={{base:'center',lg:'start'}} p='2rem calc(2vw + 2rem)' pt={{base:'4rem',lg:'2rem'}} mt={{base:'-50vh',lg:'0'}} position='relative' zIndex='10' bgGradient='linear(to-b, #000000, #0E0E0E)' borderRadius={{base:'5rem 5rem 0 0',lg:'0'}}>
          <Text fontSize='sm' color='secondaryText'>Welcome to AnimeMe, your ultimate destination for discovering and exploring the captivating world of anime. We are a dedicated team of anime enthusiasts who are passionate about bringing you comprehensive reviews, insightful analysis, and a vibrant community to connect with fellow fans.</Text>
          <Text fontSize='sm' color='secondaryText'>At AnimeMe, we believe that anime is more than just entertainment. It's a medium that sparks imagination, evokes emotions, and transports us to incredible worlds. Our mission is to provide you with a platform where you can dive deep into the rich storytelling, exquisite animation, and memorable characters that make each anime series unique.</Text>
          <Text fontSize='sm' color='secondaryText'>Our team of experienced reviewers meticulously analyzes every aspect of the anime we review. From intricate plot developments to thematic depth, we delve into the artistic techniques and narrative elements to deliver in-depth critiques that capture the essence of each series. We aim to provide you with valuable insights that empower you to make informed viewing choices.</Text>
          <Text fontSize='sm' color='secondaryText'>But AnimeMe is not just about analysis and evaluation; it's about sharing the joy of anime. We want to ignite the same excitement and passion that anime ignites within us. Through our reviews and discussions, we aim to create a vibrant community where anime enthusiasts can come together, share their thoughts, and celebrate the artistry, creativity, and boundless imagination of anime.</Text>
          <Text fontSize='sm' color='secondaryText'>Join us on this thrilling journey as we explore, discover, and revel in the sheer delight of anime. Whether you're seeking recommendations for your next anime marathon, looking for like-minded fans to engage in lively discussions, or simply want to immerse yourself in the world of anime, AnimeMe is your trusted companion.</Text>
          <Text fontSize='sm' color='secondaryText'>We value your feedback, suggestions, and engagement. Feel free to reach out to us through our contact form or connect with us on social media. We are excited to have you as part of our anime-loving community and look forward to sharing the limitless enjoyment that anime brings.</Text>
          <Text fontSize='sm' color='secondaryText'>Unleash your passion for anime with AnimeMe and experience the wonder and magic that this captivating medium has to offer.</Text>
        </Flex>
      </Flex>
    </main>
  )
}