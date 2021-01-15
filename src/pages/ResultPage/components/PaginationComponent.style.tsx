import styled, { css } from 'styled-components';

const PaginationWrapper = styled('div')`
  padding: 1rem 0;
  display: flex;
  justify-content: center;
`;

const Separator = styled('div')`
  width: 1rem;
  margin: 0 0.25rem;
`;

interface PageItemProps {
  isActive?: boolean;
}

const PageItem = styled('button')<PageItemProps>`
  background: transparent;
  border: none;
  height: 2rem;
  width: 2rem;
  margin: 0 0.25rem;
  border-radius: 50%;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => p.theme.link};
  ${(p) =>
    p.isActive &&
    css`
      background-color: ${(p) => p.theme.link};
      color: ${(p) => p.theme.body};
    `}

  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline: 0;
  }
`;

const SideItem = styled(PageItem)`
  box-shadow: transparent 0px 0px 0px 1px, transparent 0px 0px 0px 4px,
    rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

export { PaginationWrapper, Separator, PageItem, SideItem };
