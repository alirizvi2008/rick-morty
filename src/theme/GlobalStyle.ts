import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.250s linear;
 }
`;