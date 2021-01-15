import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/Button.styled';
import { ImageWrapper } from '../../components/ImageWrapper.styled';
import { Input } from '../../components/Input.styled';
import { SearchBox } from '../../components/SearchBox.styled';

const HomePage: React.FC<{}> = () => {
  const textInput = React.useRef<HTMLInputElement>(null);
  const history = useHistory();

  const onSearchClick = () => {
    const searchTerm = textInput.current?.value || '';
    history.push(`/results?name=${searchTerm}`);
  };
  const handleKeypress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearchClick();
    }
  };
  return (
    <>
      <ImageWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/home_bg.png`}
          alt='rick-morty'
          height='100%'
        />
      </ImageWrapper>
      <SearchBox>
        <Input
          type='text'
          name='searchBox'
          ref={textInput}
          onKeyPress={handleKeypress}
        />
        <Button type='button' onClick={onSearchClick}>
          SEARCH
        </Button>
      </SearchBox>
    </>
  );
};

export default HomePage;
