import React from 'react'
import {Avatar ,Box, Stack, Text, VStack} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} color={"whiteAlpha.700"} minH={"48"} px={"16"} py={["16", "8"]}>
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text>About Us</Text>
          <Text>
          Stock Insights is a platform for real-time stock market data and trends, designed for both investors and beginners. Our goal is to simplify stock analysis through intuitive charts and up-to-date information. Powered by reliable data, Stock Insights helps you stay informed and make confident decisions in a constantly evolving market.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src='' />
          <Text>Founder</Text>
        </VStack>
      </Stack>
    </Box>
  )
}

export default Footer
