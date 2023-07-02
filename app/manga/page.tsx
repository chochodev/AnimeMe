'use client';

import { Flex, } from "@chakra-ui/react";
import React from "react";

export default function SettingsPage({
    children
  }:{
    children: React.ReactNode
  }) {
  return (
    <main>
      <Flex w='full' h='full' minH='100vh' justify='center' align='center' textAlign='center' color='primary' fontSize={{base:'xl',msm:'2xl'}}>
        Error | Page Manga not available at the moment
      </Flex>
    </main>
  )
}