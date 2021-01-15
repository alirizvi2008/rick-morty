import styled from 'styled-components';

const Button = styled('button')`
  display: block;
  height: 48px;
  border-radius: 8px;
  border-width: 1px;
  width: 200px;
  cursor: pointer;
  background-color: ${p => p.theme.link};
  color: white;
  border: none;
  font-size: 20px;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${p => p.theme.linkHover};
  }
`;

export { Button };
