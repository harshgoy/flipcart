import {Dialog,Box, TextField , Typography,Button , styled} from "@mui/material";
import { useState ,useContext} from "react";
import { authenticateSignUp ,authenticateLogin} from "../../service/api";
import { DataContext} from "../../context/DataProvider";


const Component =styled(Box)`
height:70vh;
width:90vh;
`;
const Image =styled(Box)`
width:20%;
padding: 45px 35px;
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
&>p,&>h5{
    color:#FFFFFF;
    font-weight:600;
}
`;
const Wrapper =styled(Box)`
display:flex;
flex-direction:column;
padding: 25px 35px;
flex:1;
&>div,&>button,&>p{
    margin-top:20px;
}
`;
const LoginButton =styled(Button)`
text-transform:none;
background:#FB641B;
color:#fff;
height:48px;
border-radius:2px;
`;
const Text = styled(Typography)`
font-size:12px;
color:#878787;
`;
const CreateAccount = styled(Typography)`
font-size:14px;
color:#2874f0;
text-align:center;
font-weight:600;
cursor:pointer;

`;
const RequestOTP =styled(Button)`
text-transform:none;
background:#fff;
color:#2874f0;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`;

const accountInitialvalue={
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your Orders, Wishlist and Recommendations',
    },
    signup:{
        view:'signup',
        heading:"Looks like you're new here!",
        subheading:'Sign up with your mobile number to get started',
    }
}

const signUpInitialValues={
    firstname:'',
    lastname:'',
    username:'',
    email:'',
    password:'',
    phone:'',
}
const loginInitialValues={
   
    username:'',

    password:'',
    
}
const LoginDialog = ({open , setOpen}) => {
    const [account,toggleAccount]=useState(accountInitialvalue.login);

    const[signup , setSignUp]=useState(signUpInitialValues);
    const[login,setLogin]=useState(loginInitialValues);
    const{setAccount}=useContext(DataContext);
    const[error,setError]=useState(false);



    const handleClose=()=>{
        setOpen(false);
        toggleAccount(accountInitialvalue.login)
        setError(false);
    }
    const toggleSignup=()=>{
        toggleAccount(accountInitialvalue.signup)
    }

    const onInputChange =(e)=>{
        setSignUp({...signup,[e.target.name]:e.target.value})
        console.log(signup);

    }

    const onValueChange=(e)=>{
        setLogin({...login,[e.target.name]:e.target.value});

    }

    const loginUser=async()=>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);

        }

    }

    const signupUser=async()=>{
       let response=await authenticateSignUp(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    }
  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth:'unset'}}}>
      <Component>
        <Box style={{display:'flex' ,height:'100%'}}>
        <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop:20}}>{account.subheading}</Typography>
        </Image>
        {
            account.view==='login'?
        
        <Wrapper>
            <TextField variant="standard" label="Enter Email / Mobile Number" name="username" onChange={(e)=>{onValueChange(e)}}/>
            <TextField variant="standard" label="Enter Password" name="password" onChange={(e)=>{onValueChange(e)}}/>
            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
            <LoginButton onClick={()=>{loginUser();}}>Login</LoginButton>
            {error&&<Error>Please enter valid credentials</Error>}
            <Typography style={{textAlign:'center'}}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={()=>{toggleSignup()}}>New to Flipkart? Create an account</CreateAccount>
        </Wrapper>
        :
        <Wrapper>
            <TextField variant="standard" label="Enter First Name" name="firstname" onChange={(e)=>{onInputChange(e)}}/>
            <TextField variant="standard" label="Enter Last Name" name="lastname" onChange={(e)=>{onInputChange(e)}}/>
            <TextField variant="standard" label="Enter UserName" name="username" onChange={(e)=>{onInputChange(e)}}/>
            <TextField variant="standard" label="Enter Email" name="email" onChange={(e)=>{onInputChange(e)}}/>
            <TextField variant="standard" label="Enter Password" name="password" onChange={(e)=>{onInputChange(e)}}/>
            <TextField variant="standard" label="Enter Phone" name="phone" onChange={(e)=>{onInputChange(e)}}/>
            <LoginButton onClick={()=>{
                signupUser()}
                }>Continue</LoginButton>
            
        </Wrapper>
}
        </Box>
      </Component>
    </Dialog>
  )
}

export default LoginDialog
