import styled from 'styled-components';
import { Input } from '../../../components/Input.styled';

const ResultsSearchBox = styled('div')`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 16px;
  background: gray;
  margin-bottom: 24px;
  align-items: center;
`;

const ResultsInput = styled(Input)`
  margin-bottom: 0;
  margin-right: 8px;
  width: 550px;
  height: 46px;
`;

export { ResultsSearchBox, ResultsInput };
