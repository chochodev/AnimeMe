'use client';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box, Button, Flex, Grid, IconButton, Image, Text, Textarea } from '@chakra-ui/react';
import { RiDeleteBin2Line, RiDropFill, RiDropLine, RiReplyLine, RiStarFill } from 'react-icons/ri';
import { CustomStarRating } from '../components/cards/starRating';

const Post = () => {
    return (
    <main>
        {/* TOAST MESSAGE */}
        <ToastContainer position='top-center' theme='dark' />
        <Flex flexDir='column' gap='.5rem'>
            <Grid p={{base:'.25rem', md:'.5rem'}} gridTemplateColumns={{base:'none', md:'60vw 1fr'}} gap='.25rem'>
                <Flex w={{base:'100%', md:'60vw'}} flexDir='column'>
                    {/* IMAGE */}
                    <Image src='/images/light01.jpg' alt='Anime Image' w='100%' h='80vh' maxH='40rem' borderRadius='.25rem .25rem 0 0' filter='brightness(.75)' objectFit='cover' />
                    {/* DROP AND DIS-DROP BUTTONS */}
                    <Flex gap='.75rem' height='2.5rem' bg='onSurface' borderRadius='0 0 .25rem .25rem' p='0 1rem'>
                        <Flex align='center' justify='center' h='full'>
                            <Text color='primary' fontSize='sm'>Drops:</Text>
                        </Flex>
                        <Flex align='center' justify='center'>
                            <Text color='accentText' fontWeight='600' fontSize='sm'>243k</Text>
                            <IconButton variant='ghost' icon={<RiDropLine size='20' />} color='primary' width='0' height='0' />
                        </Flex>
                        <Flex align='center' justify='center' h='full'>
                            <Text color='primary' fontSize='sm'>Drain:</Text>
                        </Flex>
                        <Flex align='center' justify='center'>
                            <Text color='accentText' fontWeight='600' fontSize='sm'>545</Text>
                            <IconButton variant='ghost' icon={<RiDropLine size='20' />} color='primary' width='0' height='0' transform='rotateZ(180deg)' />
                        </Flex>
                    </Flex>
                </Flex>
                
                <Flex flexDir='column' gap='.5rem' p='.25rem'>
                    <Text color='primaryText' fontSize='1.875rem' fontWeight='600'>KONOSUBA -An Explosion on This Wonderful World!</Text>
                    <Text color='secondaryText' fontSize='sm'>Determined to perfect the life-saving Explosion spell, this bold and spirited wizard will spare no effort. Megumin, hailed as the "Unmatched Genius of the Crimson Magic Clan," has committed herself to mastering the formidable offensive magic wielded by her enigmatic rescuer. However, everything changes when her sibling stumbles upon a black kitten during a forest walk. Yet this feline is not just a cute companion – she holds the secret to unleashing a malevolent deity.<Button variant='' m='0' p='.1rem' h='initial' fontSize='sm' color='primary' >More|Less</Button></Text>
                    <Grid as='ul' gridTemplateColumns='1fr 1fr'>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>PG:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>13</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Aired:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>Apr 06, 2023</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Posted:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>Apr 06, 2023</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Status:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>Airing</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Episodes:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>34</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Season:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>3</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Genres:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>Adventure, Comedy, Fantasy, Parody, School, Demons, Magic</Text>
                            </Text>
                        </Flex>
                        <Flex as='li'>
                            <Text as='span' fontSize='.75rem' color='accentText'>Review:
                                <Text as='span' color='secondaryText' fontSize='.75rem' pl='.2rem'>8/10</Text>
                            </Text>
                        </Flex>
                    </Grid>
                </Flex>
            </Grid>
            <Flex flexDir='column' gap='1.5rem' w='100%' p={{base:'.25rem', md:'.5rem'}}>
                {/* STAR RATING */}
                <Flex as='form' justify='center' align='center' flexDir='column' gap='1rem' bg='onSurface' borderRadius='.25rem' w='15rem' m='.5rem' p={{base:'1rem', md:'1.5rem'}} boxShadow='0 0 10px 2px rgba(255, 255, 255, .1)'>
                    <CustomStarRating size='30' />
                    <Button>Send Rating</Button>
                </Flex>

                <Text color='white' fontSize='2rem' fontWeight='600' pl='.25rem'>Reviews</Text>

                <Flex flexDir={{base:'column', lg:'row-reverse'}}>
                    {/* REVIEW INPUT */}
                    <Flex as='form' flexDir='column' gap='.5rem' p='.25rem'>
                        <Textarea 
                            placeholder='Enter your opinion' 
                            height='10rem' 
                            width={{base:'100%', lg:'25rem'}} 
                            outline='1px solid #848484' 
                            border='none'
                            _focus={{
                                outline: '2px solid #5F4BB6',
                                border: 'none'
                            }} 
                        />
                        <Button w='max'>Post Review</Button>
                    </Flex>

                    {/* REVIEWS */}
                    <Flex flexDir='column' gap='.5rem'>
                        <Flex position='relative' gap='.5rem' p={{base:'.25rem', md:'.5rem'}}>
                            <Image src='/images/light01.jpg' alt='Anime Image' w='3.5rem' h='3.5rem' minW='3.5rem' minH='3.5rem' objectFit='cover' borderRadius='.25rem' />
                            <IconButton icon={<RiDeleteBin2Line size='15'/>} position='absolute' top='1.3rem' right='.1rem' color='primary' width='0' height='0'/>
                            <Flex flexDir='column' bg='onSurface' borderRadius='.25rem' p='.25rem'>
                                <Text color='secondaryText' fontSize='.75rem'>Eren Jeagar <Text as='span'>2months ago</Text></Text>
                                <Text color='primaryText' fontSize='.875rem'>I love this anime. However, everything changes when her sibling stumbles upon a black kitten during a forest walk. Yet this feline is not just a cute companion – she holds the secret to unleashing a malevolent deity.</Text>
                                <Flex gap={{base:'.25rem', md:'.5rem'}} flexWrap='wrap' height={{base:'max', md:'2.5rem'}}>
                                    <Flex align='center' justify='center' h='full'>
                                        <Text color='primary' fontSize='.7rem'>Drops:</Text>
                                    </Flex>
                                    <Flex align='center' justify='center'>
                                        <Text color='accentText' fontWeight='600' fontSize='.7rem'>243k</Text>
                                        <IconButton variant='ghost' icon={<RiDropLine size='15' />} color='primary' width='0' height='0' />
                                    </Flex>
                                    <Flex align='center' justify='center' h='full'>
                                        <Text color='primary' fontSize='.7rem'>Drain:</Text>
                                    </Flex>
                                    <Flex align='center' justify='center'>
                                        <Text color='accentText' fontWeight='600' fontSize='.7rem'>545</Text>
                                        <IconButton variant='ghost' icon={<RiDropLine size='15' />} color='primary' width='0' height='0' transform='rotateZ(180deg)' />
                                    </Flex>
                                    <Flex align='center' justify='center'>
                                    <Flex align='center' justify='center' h='full'>
                                        <Text color='primary' fontSize='.7rem'>Reply:</Text>
                                    </Flex>
                                        <IconButton variant='ghost' icon={<RiReplyLine size='20' />} color='primary' width='0' height='0' />
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    </main>
  )
}

export default Post;