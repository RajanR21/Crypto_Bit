import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai';
const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='16' color={'white'}>
        <Stack direction={['column' , 'row']}>
           <VStack alignItems={'stretch'} w={'full'}>
               <Heading size={'md'} textTransform = {'uppercase'} textAlign={['center' , 'left']}>
                  Subscribe for more
               </Heading>

               <HStack  borderBottom={'2px solid white'} py='2'> 

              <Input 
               placeholder='Enter Your Email'
               border={'none'}
               borderRadius={'none'}
               outline={'none'}
                />
                <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend size={'20'}/>
                </Button>
           </HStack>
           </VStack>

           <VStack w={'full'}
           borderLeft = {['none' , '1px solid white']}
           borderRight = {['none' , '1px solid white']}
           borderBottom={['2px solid white' , 'none']}
           py='2'
           >
    <Heading textAlign={'center'}>
        CRYPTO BITS
    </Heading>
   <Text>
   Made with ❤️ By : Rajan & Dwij
   </Text>
           </VStack>
    
           <VStack w={'full'}>
             <Heading textTransform={'uppercase'} size={'md'}>
        Connet with me
             </Heading>

             <Button variant={'link'} colorScheme={'white'}>
                <a href='https://www.linkedin.com/in/rajan-ravisaheb-010431213/'>Linkedin</a>
             </Button>

             <Button variant={'link'} colorScheme={'white'}>
                <a href='https://github.com/RajanRavisaheb'>Github</a>
             </Button>
           </VStack>

          
        </Stack>
    </Box>
  )
}

export default Footer