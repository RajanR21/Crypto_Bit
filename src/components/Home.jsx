import { Box, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>

      <Stack
        bgColor={"blackAlpha.900"}
        h="full"
        p={'4'}
        alignItems={'center'}
        direction={['column', 'row']}
      >
        <Box bgColor={"blackAlpha.100"} w={"50%"} >
          <motion.div
            style={{
              height: ["80vh", "100vh"],
              justifyContent: "center",
            }}
            animate={{
              translateY: "20px",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <Image
              w={"full"}
              h={"full"}
              objectFit={"contain"}
              src={btcSrc}
            //filter={"grayscale(1)"}
            />

          </motion.div>

        </Box>
        <VStack w={"full"} alignItems = {"center"}>
          
        <Text
        fontSize={"4xl"}
        justifyContent={"center"}
        fontWeight={"bold"}
        color={"whiteAlpha.900"}
        mt={"10"}
      >
        STAY UPDATED WITH CRYPTO MARKET !
      </Text>
          <Text
            justifyContent={"flex-start"}
            textColor={"whiteAlpha.700"}
            w="60%"
            letterSpacing={'widest'}
            lineHeight={'190%'}
            //  p={['4', '16']}
            textAlign={'center'}
          >
            🚀 Introducing Crypto Bits - Your Gateway to the Digital Revolution!

Welcome to Crypto Bits, where the future of finance meets the power of innovation. Step into a world where digital currencies redefine the way we exchange value, invest, and transact. Dive into the exciting realm of cryptocurrency trading begins.
<br></br>
<br></br>
🔒 Your Security, Our Priority:
Your financial security is our utmost concern. Crypto Bits employs state-of-the-art security measures to ensure your assets are protected at all times. Trade with confidence, knowing that your crypto holdings are in safe hands.
          </Text>
        </VStack>

      </Stack>

    </>
  );

};

export default Home;
