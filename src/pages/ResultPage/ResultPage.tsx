import React from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Button } from '../../components/Button.styled';
import { Text } from '../../components/CardText.style';
import { PageSize } from '../../constants/PageSize';
import {
  getCharacters,
  getCharactersFailure,
  replaceCharacters,
} from '../../reducers/charactersReducer';
import { updatePageNumber } from '../../reducers/filtersReducer';
import { charactersSelector } from '../../selectors/charactersSelector';
import { filtersSelector } from '../../selectors/filtersSelector';
import { fetchCharacters } from '../../services/characterService';
import CharacterCard from './components/CharacterCard';
import { CharacterListContainer } from './components/CharacterListContainer.styled';
import Pagination from './components/Pagination';
import { ResultsInput, ResultsSearchBox } from './components/SearchBox.styled';

const ResultPage: React.FC<{}> = () => {
  const params = useLocation();
  const history = useHistory();
  const searchTerm = new URLSearchParams(params.search).get('name') || '';
  const textInput = React.useRef<HTMLInputElement>(null);

  const { data, loading, error } = useSelector(charactersSelector);
  const { pageNumber } = useSelector(filtersSelector);
  const dispatch = useDispatch();

  const characters = data
    ? data.slice((pageNumber - 1) * PageSize, pageNumber * PageSize)
    : [];

  React.useEffect(() => {
    (textInput.current as HTMLInputElement).value = searchTerm;
    const newSearchTerm = textInput.current?.value;
    batch(() => {
      dispatch(updatePageNumber(1));
      dispatch(getCharacters());
    });
    fetchCharacters(newSearchTerm || searchTerm)
      .then((data) => dispatch(replaceCharacters(data)))
      .catch(() => dispatch(getCharactersFailure()));
  }, [dispatch, searchTerm]);

  const updateQuery = () =>
    history.push(`/results?name=${textInput.current?.value}`);

  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      updateQuery();
    }
  };
  return (
    <>
      <ResultsSearchBox>
        <ResultsInput
          type='text'
          name='searchBox'
          ref={textInput}
          onKeyPress={handleKeypress}
        />
        <Button type='button' onClick={updateQuery}>
          SEARCH
        </Button>
      </ResultsSearchBox>
      {error && <Text textAlign='center'>No Characters match search query.</Text>}
      {loading && <Text textAlign='center'>Loading...</Text>}
      {characters.length > 0 && !loading && (
        <>
          <CharacterListContainer>
            {characters.map((character) => (
              <CharacterCard key={character.id} {...character} />
            ))}
          </CharacterListContainer>
          <Pagination />
        </>
      )}
    </>
  );
};

export default ResultPage;
