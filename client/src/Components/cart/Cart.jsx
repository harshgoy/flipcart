import React from 'react'
import {useSelector} from"react-redux";
import {Grid,Typography,Box,styled, Button} from "@mui/material"
import CartItem from './CartItem';
import TotalView from './TotalView';
import EmptyCart from './EmptyCart';
import { useContext} from "react";
import {loadStripe} from '@stripe/stripe-js';
import { DataContext } from '../../context/DataProvider';

const Container= styled(Grid)(({theme})=>({
    padding:'30px 135px',
    background:'#F2F2F2',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }
}))



const Header= styled(Box)`
padding:15px 24px;
background:#fff;
`;
const ButtonWrapper= styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
border-top:1px solid #f0f0f0;
`;

const StyledButton=styled(Button)`
display:flex;
margin-left:auto;
background:#fb641b;
color:#fff;
width:180px;
height:51px;
border-radius:2px;
`;
const LeftComponent=styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        marginBottom:15
    }
}))




const Cart = () => {
    const{cartItems}=useSelector(state=>state.cart)
    const {account,setAccount}=useContext(DataContext);
   

  const buyNow = async () => {
    const stripe = await loadStripe('pk_test_51NvnFCSFdBIjz8ZMhjXyGdue06AIgdceFXt89fETpoo2lKA0omwt87E1YenAJyi7HE2JPL5zg28V5zd2pyB0airR008iNaEb6N');
     //console.log(product);
    const body={
      products:cartItems
    }
    const headers={
      "Content-Type":"application/json"
    }
    const response= await fetch("/create-checkout-session",{
      method:"POST",
      headers:headers,
      body:JSON.stringify(body)
    });
    const session=await response.json();
    const result=stripe.redirectToCheckout({
      sessionId:session.id
    })
    if(result.error){
      console.log(result.error);
    }

  }
  return (
   <>
   {
    cartItems.length?
    <Container container>
        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
                <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {
                cartItems.map(item=>(
                    <CartItem item={item}/>
                ))
            }
            
            <ButtonWrapper>
              {
                account?<StyledButton onClick={() => buyNow()}>
                PLACE ORDER
            </StyledButton>:"Pls login first to place an order"
              }
                
            </ButtonWrapper>
        </LeftComponent>
        <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems}/>

        </Grid>
    </Container>
    :
    <EmptyCart/>

   }
   </>
  )
}

export default Cart
