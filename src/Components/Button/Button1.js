import styled from "styled-components"

const Button1 = styled.button ` 
  width: 30vw;
  height: 10vw;
  background-color: transparent;
  border-color: #F59F00;
  border-radius: 8px;
  border-width: 1px;
  color: #F59F00;
  margin-right: 10px;
  box-shadow: 5px 10px 8px -10px rgba(0,0,0,0.75);
  cursor: pointer;

  ${({theme})=> theme.media.desktop}{
    width: 8vw;
    height: 3vw;
  }
`

export default Button1;