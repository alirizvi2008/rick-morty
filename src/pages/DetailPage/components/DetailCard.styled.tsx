import styled from 'styled-components';

const DetailContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto 20px auto;
  align-items: center;
  text-align: center;
  border: 1px solid #dddfe2;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
`;

const Episode = styled('div')`
  margin: 4px 0;
  display: flex;
  flex-direction: column;
`;

const EpisodeDate = styled('span')`
  color: ${(p) => p.theme.subText};
  font-size: 14px;
`;

const BuyButton = styled('button')`
  display: block;
  height: 30px;
  border-radius: 8px;
  border-width: 1px;
  width: 180px;
  cursor: pointer;
  background-color: ${p => p.theme.link};;
  color: white;
  border: none;
  font-size: 16px;
  margin: 12px 0;
  :focus {
    outline: none;
  }
  :hover {
    background-color: ${p => p.theme.linkHover};
  }
`;

export { BuyButton, DetailContainer, Episode, EpisodeDate };
