import {useParams} from "react-router-dom";
import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getProductDetails } from "../../redux/actions/productActions";
import {Box,styled,Grid} from "@mui/material";
import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";
import CircularProgress from '@mui/material/CircularProgress';

const Component =styled(Box)`
background:#F2F2F2;
margin-top:55px;
`;

const Container=styled(Grid)(({theme})=>({
    background:'#FFFFFF',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        margin:0
    }


}));




const RightContainer=styled(Grid)`
margin-top:50px;
padding-left:25px;
&>p{
    margin-top:10px;
}
`;
const Progress =styled(CircularProgress)`
position: absolute;
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
text-align: center;
top:50%
`

const DetailView = () => {
   

    const dispatch = useDispatch();
    const {id} =useParams();
    const {loading, product}=useSelector(state=>state.getProductDetails);
    console.log(loading);


    useEffect(()=>{
        if(product && id !== product.id )
            dispatch(getProductDetails(id));

    },[dispatch,id,product,loading])
 
  return (
    loading ?
    <Progress/>
    :
    <Component>
        {
            product &&Object.keys(product).length&&
            <Container container>
                <Grid item lg={4} md={4} sm={8} xs={12}>
                    <ActionItems product={product}/>

                </Grid>
                <RightContainer item lg={8} md={8} sm={8} xs={12}>
                    <ProductDetail product={product}/>
                </RightContainer>

            </Container>
        }
      
    </Component>
  )
}

export default DetailView
