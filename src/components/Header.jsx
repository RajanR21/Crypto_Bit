import { Button, Heading, HStack } from '@chakra-ui/react'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const authParam = queryParams.get('auth');

  const handleLoginClick = () => {
    if (authParam === 'success') {
      // If already logged in, redirect to localhost:3000 with auth=none
      window.location.href = 'http://localhost:5002/';
    } else {
      // If not logged in, redirect to localhost:5002
      window.location.href = 'http://localhost:5002/';
    }
  };

  return (
    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.900"} spacing={"8"} w={"full"}>
      <HStack w={"full"}>
        <Heading justifyContent={"flex-start"} color={"whiteAlpha.900"}>
          Crypto Bits
        </Heading>
      </HStack>
      <HStack spacing={"6"}>
        <Button variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>

        <Button variant={"unstyled"} color={"white"}>
          <Link to="/exchanges">Exchanges</Link>
        </Button>

        <Button variant={"unstyled"} color={"white"}>
          <Link to="/coins">Coins</Link>
        </Button>

        <Button variant={"unstyled"} color={"white"} onClick={handleLoginClick}>
          {authParam === 'success' ? (
            <Link to={`/?auth=none`}>Log-Out</Link>
          ) : (
            <Link to={`/?auth=success`}>Log-In</Link>
          )}
        </Button>
      </HStack>
    </HStack>
  );
};

export default Header;
