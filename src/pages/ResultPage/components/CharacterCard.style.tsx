import styled from 'styled-components';

const CardContainer = styled('div')`
  display: flex;
  border: 1px solid #dddfe2;
  width: 600px;
  margin-bottom: 16px;
  position: relative;
  border-radius: 8px;
`;

const CardDetailContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

const ImageWrapper = styled('img')`
  height: 180px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export { CardContainer, CardDetailContainer, ImageWrapper };
