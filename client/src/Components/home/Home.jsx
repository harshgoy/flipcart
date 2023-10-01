import { Box, styled } from "@mui/material";
import Banner from "./Banner";
import Navbar from "./Navbar";
import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import {getProducts} from "../../redux/actions/productActions"
import Slide from "./Slide";
import Midslide from "./Midslide";
import MidSection from "./MidSection";

const Component = styled(Box)`
padding:10px;
background:#F2F2F2;`;

const Home =()=>{
   const {products}= useSelector(state=>state.getProducts)
   
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())

    },[dispatch])
    return(
    <>
        <Navbar/>
        <Component>
            <Banner/>
            <Midslide products={products} title="Deal of the Day" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Discounts for You" timer={false}/>
            <Slide products={products} title="Suggesting Items" timer={false}/>
            <Slide products={products} title="Top Selections" timer={false}/>
            <Slide products={products} title="Recommended Items" timer={false}/>
            <Slide products={products} title="Trending Offers" timer={false}/>
            <Slide products={products} title="Season's Top Picks" timer={false}/>
            <Slide products={products} title="Top Deals on Accessories" timer={false}/>
        </Component>
        
    </>)
}
export default Home;