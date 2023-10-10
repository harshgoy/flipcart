import { ButtonGroup, Button, styled } from "@mui/material";
import { useDispatch } from 'react-redux';
import { reduceQuantity, increaseQuantity } from "../../redux/actions/cartActions";


const Component = styled(ButtonGroup)`
margin-top:30px;
`;

const StyledButton = styled(Button)`
border-radius:50%;
`;

const GroupedButton = ({ quantity, pid }) => {
  const dispatch = useDispatch();
  return (
    <Component>
      {quantity>1&&
      <StyledButton onClick={() => {
        dispatch(reduceQuantity(pid))

      }}>-</StyledButton>}
      <StyledButton disabled>{quantity}</StyledButton>
      <StyledButton onClick={() => {
        dispatch(increaseQuantity(pid))


      }}>+</StyledButton>

    </Component>
  )
}

export default GroupedButton
