import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}

export const Button = styled.button<ButtonProps>`
  color: red;
  border: 1px solid #000;
  padding: 10px;
  border-radius: 7px;
  background: ${(props) => (props.primary ? 'green' : '#ddd')};
`;

export const Container = styled.div<ButtonProps>`
  width: 100%;
  padding: 60px;
`;
