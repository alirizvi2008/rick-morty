import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from '../../../components/CardText.style';
import { PageSize } from '../../../constants/PageSize';
import { appendCharacters } from '../../../reducers/charactersReducer';
import { updatePageNumber } from '../../../reducers/filtersReducer';
import { charactersSelector } from '../../../selectors/charactersSelector';
import { filtersSelector } from '../../../selectors/filtersSelector';
import {
  PageItem,
  PaginationWrapper,
  Separator,
  SideItem,
} from './PaginationComponent.style';


const Pagination: React.FC<{}> = () => {
  const { pageNumber: page } = useSelector(filtersSelector);
  const { data, info } = useSelector(charactersSelector);

  const dispatch = useDispatch();
  const nextPage = info?.next;
  const totalPages = Math.ceil((info?.count || 1) / PageSize);

  React.useEffect(() => {
    if (data.length === page * PageSize && nextPage) {
      fetch(nextPage)
        .then((data) => data.json())
        .then((data) => dispatch(appendCharacters(data)));
    }
  });

  return (
    <>
      <Text textAlign='center'>
        Page {page} of {totalPages}
      </Text>
      <PaginationWrapper>
        {page !== 1 && (
          <SideItem
            onClick={() => dispatch(updatePageNumber(page - 1))}
            type='button'
          >
            &lt;
          </SideItem>
        )}
        <PageItem
          onClick={() => dispatch(updatePageNumber(1))}
          type='button'
          isActive={page === 1}
        >
          {1}
        </PageItem>
        {page > 3 && <Separator>...</Separator>}
        {page === totalPages && totalPages > 3 && (
          <PageItem onClick={() => dispatch(updatePageNumber(page - 2))} type='button'>
            {page - 2}
          </PageItem>
        )}
        {page > 2 && (
          <PageItem onClick={() => dispatch(updatePageNumber(page - 1))} type='button'>
            {page - 1}
          </PageItem>
        )}
        {page !== 1 && (
          <PageItem
            onClick={() => dispatch(updatePageNumber(page))}
            type='button'
            isActive
          >
            {page}
          </PageItem>
        )}
        {page < totalPages - 1 && (
          <PageItem onClick={() => dispatch(updatePageNumber(page + 1))} type='button'>
            {page + 1}
          </PageItem>
        )}
        {page === 1 && totalPages > 3 && (
          <PageItem onClick={() => dispatch(updatePageNumber(page + 2))} type='button'>
            {page + 2}
          </PageItem>
        )}
        {page !== totalPages && (
          <SideItem
            onClick={() => dispatch(updatePageNumber(page + 1))}
            type='button'
          >
            &gt;
          </SideItem>
        )}
      </PaginationWrapper>
    </>
  );
};

export default Pagination;
