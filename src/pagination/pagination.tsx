import React from 'react';
import Button from '../button/button';

export interface Props {
  page: number,
  setPage: (page: number) => void,
  nbPages: number;
}

const Pagination: React.VFC<Props> = ({page, setPage, nbPages}) => (
  <>
    <Button onClick={() => setPage(page - 1)}>{"Previous"}</Button>
    {`${page}/${nbPages}`}
    <Button onClick={() => setPage(page + 1)}>{"Next"}</Button>
  </>
);

export default Pagination;
