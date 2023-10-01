import { Typography,Box,styled, Table, TableBody, TableCell ,TableRow} from "@mui/material";
import {LocalOffer as Badge} from '@mui/icons-material';

const SmallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
&>p{
    font-size;14px;
    margin-top:10px;
}`;

const StyledBadge=styled(Badge)`
font-size:15px;
margin-right:10px;
color:#00CC00;
`;

const ColumnText=styled(TableRow)`
font-size:14px;
vertical-align:baseline;
&>td{
    font-size:14px;
    margin-top:10px;
    border:none;
}
`;
const ProductDetail = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date= new Date(new Date().getTime()+(5*24*60*60*1000));
  return (
    <>
    <Typography>{product.title.longTitle}</Typography>
                    <Typography style={{marginTop:5 , color:'#878787' ,fontSize:14}}
                    >8 Ratings & 1 review
                        <Box component='span'><img src={fassured} alt="img"style={{width:77,marginLeft:20}}/></Box>
                    </Typography>
                    <Typography>
                        <Box component='span' style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{color:'#388E3C'}}>{product.price.discount}</Box>
                    </Typography>
                    <Typography>Available Offers</Typography>
                    <SmallText>
                        <Typography><StyledBadge/>5% Cashback on Flipkart Axis Bank Card</Typography>
                        <Typography><StyledBadge/>Get extra 65% off (price inclusive of cashback/coupon)</Typography>
                        <Typography><StyledBadge/>Buy 2 items save ₹20; Buy 3-4 save ₹30; Buy 5+ save ₹50</Typography>
                        <Typography><StyledBadge/>Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth ₹10,000*</Typography>
                        <Typography><StyledBadge/>Purchase now & get 1 surprise cashback coupon in Future</Typography>
                    </SmallText>
                    <Table>
                        <TableBody>
                            <ColumnText>
                                <TableCell style={{color:'#878787'}}>Delivery</TableCell>
                                <TableCell style={{fontWeight:600}}>Delivery By {date.toDateString()} | ₹40</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color:'#878787'}}>Warranty</TableCell>
                                <TableCell>No Warranty</TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color:'#878787'}}>Seller</TableCell>
                                <TableCell >
                                    <Box component='span' style={{color:'2874f0'}}>SuperCom Net</Box>
                                    <Typography>GST invoice available</Typography>
                                    <Typography>See other sellers starting from {product.price.cost}</Typography>
                                </TableCell>
                            </ColumnText>
                            <ColumnText>
                                <TableCell colSpan={2}>
                                    <img src={adURL} style={{width:390}} alt='imagead'/>
                                </TableCell>
                                
                            </ColumnText>
                            <ColumnText>
                                <TableCell style={{color:'#878787'}}>Description</TableCell>
                                <TableCell>{product.description}</TableCell>
                            </ColumnText>
                        </TableBody>

                    </Table>
    </>
  )
}

export default ProductDetail
