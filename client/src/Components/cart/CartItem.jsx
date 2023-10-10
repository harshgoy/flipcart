import { Typography,Box,styled, Button } from "@mui/material";
import { addEllipsis } from "../../utils/common_utils";
import ButtonGroup from "./ButtonGroup";
import { useDispatch } from "react-redux";
import {removeFromCart} from "../../redux/actions/cartActions";



const Component=styled(Box)`
display:flex;
border-top:1px solid #f0f0f0;
background:#fff;
`;

const LeftComponent=styled(Box)`
margin:20px;
display:flex;
flex-direction:column;

`;
const SmallText=styled(Typography)`
font-size:14px;
color:#878787;
margin-top:10px;
`;
const Remove=styled(Button)`
font-size:16px;
color:#000;
font-weight:600;
margin-top:20px;
`;
const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const dispatch=useDispatch();
    const removeItemFromCart=(id)=>{
        dispatch(removeFromCart(id));
    }
  return (
    <Component>
        <LeftComponent>
            <img src={item.url} alt="cartprodimg" style={{height:110,width:110}}/>
            <ButtonGroup quantity={item.quantity } pid={item.id}/>
        </LeftComponent>
        <Box style={{margin:20}}>
            <Typography>{addEllipsis(item.title.longTitle)}</Typography>
            <SmallText>Seller : RetailNet
                <Box component='span'><img src={fassured} alt='flipkart' style={{width:50,marginLeft:10}}/></Box>
            </SmallText>
            <Typography style={{margin: '20px 0'}}>
                <Box component='span' style={{fontWeight:600,fontSize:18}}>₹{item.price.cost*item.quantity}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#878787'}}><strike>₹{item.price.mrp*item.quantity}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color:'#388E3C'}}>{item.price.discount}</Box>
            </Typography>
            <Remove onClick={()=>removeItemFromCart(item.id)}>REMOVE</Remove>
        </Box>
    </Component>
  )
}

export default CartItem
