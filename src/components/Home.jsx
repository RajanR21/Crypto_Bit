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
        GET UPDATED WITH CRYPTO MARKET
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo
            tempora deleniti quod, est eos veniam autem asperiores rem, nam
            laudantium ut, similique ducimus amet sequi et voluptas iusto rerum
            at aliquid numquam corporis ipsa reprehenderit? Porro iusto magnam,
            sit vero deleniti, non nemo rem accusamus neque, quibusdam ab.
            Libero,
          </Text>
        </VStack>

      </Stack>

    </>
  );

};

export default Home;
