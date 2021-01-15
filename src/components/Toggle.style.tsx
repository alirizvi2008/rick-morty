import styled from 'styled-components';

const ToggleWrapper = styled('div')`
  width: 50px;
  min-width: 50px;
  height: 25px;
  border-radius: 25px;
  border: 1px solid #666;
  display: flex;
  background: black;
  cursor: pointer;
`;

interface NotchProps {
    isLight: boolean;
}

const Notch = styled('div')<NotchProps>`
  height: 21px;
  width: 21px;
  border: 1px solid #666;
  margin-top: 1px;
  background: white;
  border-radius: 50%;
  transition: transform 0.1s linear;
  transform: translate(${(p) => (p.isLight ? '1px' : '26px')});
`;

export { ToggleWrapper, Notch };
