import styled, { css } from 'styled-components';

interface WrapperProps {
  alignCentre?: boolean;
}
const Wrapper = styled('div')<WrapperProps>`
  margin: 4px 0;
  display: flex;
  flex-direction: column;
  ${(p) =>
    p.alignCentre &&
    css`
      align-items: center;
    `}
`;

const Label = styled('div')`
  font-size: 12px;
  color: ${(p) => p.theme.subText};
  border-bottom: 1px solid ${(p) => p.theme.subText};
  max-width: fit-content;
`;

interface TextProps {
  textAlign?: 'left' | 'right' | 'center' | 'justify' | 'initial' | 'inherit';
}

const Text = styled('div')<TextProps>`
  font-family: cursive;
  text-align: ${(p) => p.textAlign || 'inherit'};
`;

export { Wrapper, Label, Text };
