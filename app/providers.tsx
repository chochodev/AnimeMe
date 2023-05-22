'use client';

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import { myCustomTheme } from "@/styles/theme";

export function Providers({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <CacheProvider>
      <ChakraProvider theme={myCustomTheme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}