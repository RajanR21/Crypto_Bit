import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from "../index"
import { Button, Container, HStack, Radio, RadioGroup } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import CoinCard from './CoinCard';
const Coins = () => {

  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹" : currency === "eur" ? "€" : "$"
  
  function removeSymbolAndConvertToInt(inputString) {
    // Use regular expression to match digits at the beginning of the string
    const match = inputString.match(/^\D*(\d+)/);

    if (match) {
        // Extract the matched digits and convert them to an integer
        const digits = match[1];
        const intValue = parseInt(digits, 10);
        return intValue;
    } else {
        // If there are no digits at the beginning, return null or any desired value
        return null; // You can change this to return another value like 0 or -1 if needed
    }
}
const checkoutHandler = async (amount) => {

  amount = removeSymbolAndConvertToInt(amount)

  console.log(amount);
  const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

  const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
      amount
  })

  const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Rajan Ravisaheb",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/RajanR21",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
          name: "Rajan Ravisaheb",
          email: "gaurav.kumar@example.com",
          contact: "9999999999"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();
}


  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1);

  useEffect(() => {

    const fatchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
      }
      catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fatchCoins();
  }, [currency, page])
  //[currency, page] : which means that whenever currencty and page changes data fetching happens again

  if (error) {
    return <ErrorComponent message={"Error While Fetching Coins"} />
  }

  return (
    <Container maxW={"container.xl"}>

      {loading ? <Loader /> :
      (
        <>

        <RadioGroup value = {currency} onChange={setCurrency} p = {"8"}>
          <HStack spacing={"4"} >
            <Radio value={"inr"}>INR</Radio>
            <Radio value={"usd"}>USD</Radio>
            <Radio value={"eur"}>EUR</Radio>
          </HStack>
        </RadioGroup>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {
              coins.map((i) => (
                
                <CoinCard
                  id={i.id}
                  key={i.id}
                  name={i.name}
                  price={i.current_price}
                  img={i.image}
                  symbol={i.symbol}
                  currencySymbol={currencySymbol}
                  checkoutHandler = {checkoutHandler}
                />
              )
              )}
          </HStack>
        
          <HStack transition={"all 0.5s"}

            css={{
              "& : hover": {
                transform: "scale(1.1)",
              },
            }}
            w={"full"}
            overflowX={"auto"}
            p={"8"}
            m={"auto"}>
            {
              btns.map((items, index) => (

                <Button
                  key = {index}
                  bgColor={"whiteAlpha.300"}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}
                </Button>


              ))
            }
          </HStack>
        </>
      )}

    </Container>
  )
}

export default Coins

