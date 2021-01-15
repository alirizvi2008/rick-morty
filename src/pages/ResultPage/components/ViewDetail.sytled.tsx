import styled from 'styled-components';

const ViewDetail = styled('span')`
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
  > a {
    color: ${p => p.theme.link}; 
  } 
  :hover {
    text-decoration: underline; 
  }
`;

export { ViewDetail };
