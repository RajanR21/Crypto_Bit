import { Button, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing = {"8"} w = {"full"}>
    <HStack w={"full"}>

    <Heading justifyContent={"flex-start"} color = {"whiteAlpha.900"}>Crypto Bit</Heading>
    </HStack>
    <HStack spacing={"6"}>

    
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/" >
          Home
        </Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges" >
          Exchanges
        </Link>
      </Button>

      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins" >
          Coins
        </Link>
      </Button>

      </HStack>
    </HStack>
  )
}

export default Header