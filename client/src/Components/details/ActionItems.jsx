import React, { useState } from 'react'
import { Box, Button, styled } from "@mui/material"
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm';
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';
import {useSelector} from"react-redux";


const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: '40%',
  padding: '40px 0 0 80px',
  [theme.breakpoints.down('lg')]: {
    padding: '20px 40px'
  }

}));


const Image = styled('img')({
  padding: '15px 20px',
  border: '1px solid #f0f0f0',
  width: '95%'


})

const StyledButton = styled(Button)(({ theme }) => ({
  width: '48%',
  height: '50px',
  borderRadius: 2,
  [theme.breakpoints.down('lg')]: {
    width: '46%'

  },
  [theme.breakpoints.down('sm')]: {
    width: '48%'

  }



}));





const ActionItems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = product;
  const [quantity, setQuantity] = useState(1);


  const addItemToCart = () => {
    dispatch(addToCart(id, quantity))
    navigate('/cart');

  }
  const{cartItems}=useSelector(state=>state.cart);

  const buyNow = async () => {
    const stripe = await loadStripe('pk_test_51NvnFCSFdBIjz8ZMhjXyGdue06AIgdceFXt89fETpoo2lKA0omwt87E1YenAJyi7HE2JPL5zg28V5zd2pyB0airR008iNaEb6N');
     //console.log(product);
    const body={
      products:cartItems
    }
    const headers={
      "Content-Type":"application/json"
    }
    const response= await fetch("create-checkout-session",{
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
    <LeftContainer>
      {/* <Box style={{padding:'15px 20px', border:'1px solid #f0f0f0', width:'95%'}}> */}
      <Image src={product.detailUrl} alt="img" />
      {/* </Box> */}
      <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><Cart />Add to Cart</StyledButton>
      <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb641b' }}><Flash />Buy Now</StyledButton>
    </LeftContainer>


  )
}

export default ActionItems
