import React from 'react';
import { Link } from 'react-router-dom';
import { Character } from '../../../types/Character';
import CardText from '../../../components/CardText';
import { CardContainer, CardDetailContainer, ImageWrapper } from './CharacterCard.style';
import { ViewDetail } from './ViewDetail.sytled';

const CharacterCard: React.FC<Character> = ({
  id,
  name,
  image,
  episode,
  location,
}) => {
  return (
    <CardContainer>
      <ImageWrapper src={image} alt='character img' />
      <CardDetailContainer>
        <CardText label='Name' value={name} />
        <CardText label='Number of episodes' value={episode?.length} />
        <CardText label='Last location' value={location?.name} />
      </CardDetailContainer>
      <ViewDetail>
        <Link to={`/detail/${id}`}>View more detail</Link>
      </ViewDetail>
    </CardContainer>
  );
};

export default CharacterCard;
