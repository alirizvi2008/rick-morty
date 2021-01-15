import React from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { charactersSelector } from '../../selectors/charactersSelector';
import DetailCard from './components/DetailCard';

const DetailPage: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
}) => {
  const { data } = useSelector(charactersSelector);
  const character = data.find((c) => c.id === Number(match.params?.id));
  return <>{character && <DetailCard {...character} />}</>;
};

export default DetailPage;
