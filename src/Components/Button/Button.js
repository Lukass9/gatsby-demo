import styled from "styled-components"

const Button = styled.button `
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 50px;
  color: ${({theme}) => theme.colors.primary};
  border: 2px solid ${({theme}) => theme.colors.primary};
  width: 250px;
  height: 50px;
  left: 2vw;
  top: 1.2vw;
  cursor: pointer;

  ${({theme}) => theme.media.tablet} {
    color: red;
  }
`;

export default Button;