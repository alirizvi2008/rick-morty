import React from 'react';
import { error, success } from '../../../actions/episodeActions';
import CardText from '../../../components/CardText';
import { Label, Text } from '../../../components/CardText.style';
import { episodeReducer, episodeState } from '../../../reducers/episodeReducer';
import { Character } from '../../../types/Character';
import {
  BuyButton,
  DetailContainer,
  Episode,
  EpisodeDate,
} from './DetailCard.styled';

const DetailCard: React.FC<Character> = ({
  id,
  name,
  created,
  episode,
  gender,
  image,
  location,
  origin,
  species,
  status,
  type,
  url,
}) => {
  const [state, dispatch] = React.useReducer(episodeReducer, episodeState);
  React.useEffect(() => {
    (async () => {
      try {
        const promises = episode?.map((e) =>
          fetch(e).then((res) => res.json())
        );
        const res = await Promise.all(promises);
        dispatch(success(res));
      } catch {
        dispatch(error(true));
      }
    })();
  }, [episode]);

  const handleOnClick = (e: React.SyntheticEvent, name: string) => {
    e.stopPropagation();
    alert(`Buying "${name}" merchandise!`);
  };
  return (
    <DetailContainer>
      <img src={image} alt='character img' width='400px' />
      <BuyButton
        type='button'
        name='buy-btn'
        onClick={(e) => handleOnClick(e, name)}
      >
        Buy merchandise
      </BuyButton>
      <CardText alignCentre label='Id' value={id} />
      <CardText alignCentre label='Name' value={name} />
      <CardText alignCentre label='Gender' value={gender} />
      <CardText alignCentre label='Species' value={species} />
      <CardText alignCentre label='Status' value={status} />
      <CardText alignCentre label='Type' value={type} />
      <CardText alignCentre label='Origin' value={origin.name} />
      <CardText alignCentre label='Locatiion' value={location?.name} />
      <CardText
        alignCentre
        label='Created'
        value={created && new Date(created).toLocaleString()}
      />
      <Label>Episodes</Label>
      {state.data?.map((e) => (
        <Episode key={e.id}>
          <Text>{e.name}</Text>
          <EpisodeDate>
            {e.episode} - {e.air_date}
          </EpisodeDate>
        </Episode>
      ))}
      {state.error && <Text>Error fetching Episodes...</Text>}
      {state.loading && <Text>Loading...</Text>}
    </DetailContainer>
  );
};

export default DetailCard;
