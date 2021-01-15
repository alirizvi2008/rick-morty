import React from 'react';
import { Label, Text, Wrapper } from './CardText.style';

interface Props {
  label: string;
  value?: string | number;
  alignCentre?: boolean;
}

const CardText: React.FC<Props> = ({ label, value, alignCentre }) => {
  return (
    <Wrapper alignCentre={alignCentre}>
      <Label>{label}</Label>
      <Text>{value || '-'}</Text>
    </Wrapper>
  );
};

export default CardText;
