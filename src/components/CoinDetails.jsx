import { Container, Box, RadioGroup, HStack, Radio, VStack, Text, Image, StatLabel, StatNumber, Stat, StatHelpText, StatArrow, Badge, Progress } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { server } from '../index';
import ErrorComponent from './ErrorComponent';

const CoinDetails = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"

  useEffect(() => {
   //async is a caller function which uses await keyword with function call
   //due to await asynchronous function pauses untill promise resolved.
    const fatchCoin = async () => {
      try {
        
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        setCoin(data); //axios is dataa fetching package on npm which sends http request and manage their responses.
        setLoading(false);
      }
      catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fatchCoin();
  }, [params.id])


  if (error) {
    return <ErrorComponent message={"Error While Fetching Coin"} />
  }

  return (
    <Container maxW={"container.xl"}>
      {
        loading ? <Loader /> : (

          <>
            <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
              <HStack spacing={"4"} >
                <Radio value={"inr"}>INR</Radio>
                <Radio value={"usd"}>USD</Radio>
                <Radio value={"eur"}>EUR</Radio>
              </HStack>
            </RadioGroup>

            <VStack spacing={"4"} p={"16"} alignItems={"flex-start"}>
              

              <Image
                src={coin.image.large}
                w={"16"}
                h={"16"}
                objectFit={"contain"}
              />

              <Stat>  
                <StatLabel>
                  {coin.name}
                </StatLabel>
                <StatNumber>
                  {currencySymbol}
                  {coin.market_data.current_price[currency]}
                </StatNumber>
                <StatHelpText>
                  <StatArrow
                    type={coin.market_data.price_change_percentage_24h > 0 ? "increase" : "decrease"}
                  />
                  {coin.market_data.price_change_percentage_24h}%
                </StatHelpText>
              </Stat>

              <Badge
                fontSize={"xl"}
                bgColor={"blackAlpha.800"}
                color={"white"}>
                { `Rank : #${coin.market_data.market_cap_rank}`}
              </Badge>

              <CustomBar
                high={`${currencySymbol}${coin.market_data.high_24h[currency]}`}
                low={`${currencySymbol}${coin.market_data.low_24h[currency]}`}
              />

              <Box w={"full"} p="4">
                <Item title={"Max Supply"} value={coin.market_data.total_supply} />
                <Item
                  title={"Available Supply"}
                  value={coin.market_data.total_supply - coin.market_data.circulating_supply}
                />
                <Item
                  title={"Market Cap"}
                  value={`${currencySymbol}${coin.market_data.market_cap[currency]}`}
                />
                <Item
                  title={"All Time Low"}
                  value={`${currencySymbol}${coin.market_data.atl[currency]}`}
                />
                <Item
                  title={"All Time High"}
                  value={`${currencySymbol}${coin.market_data.ath[currency]}`}
                />
              </Box>

              <Text fontSize={"small"} alignSelf={"center"} opacity={"0.7"} >
                Last Updated On {Date(coin.market_data.last_updated).split("G")[0]}
              </Text>
            </VStack>

          </>

        )
      }
    </Container>
  )
}

const CustomBar = ({ high, low }) => (
  <VStack w={"full"}>
    <Progress value={50} colorScheme={"teal"} w={"full"} />
    <HStack justifyContent={"space-between"} w={"full"}>
      <Badge children={low} colorScheme={"red"} />
      <Text fontSize={"sm"}>24 Hour Range</Text>
      <Badge children={high} colorScheme={"green"} />
    </HStack>
  </VStack>
);

const Item = ({ title, value }) => (
  <HStack justifyContent={"space-between"} w={"full"} my={"4"}>
    <Text fontFamily={"Bebas Neue"} letterSpacing={"widest"}>
      {title}
    </Text>
    <Text>{value}</Text>
  </HStack>
);

export default CoinDetails