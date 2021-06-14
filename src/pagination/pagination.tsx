import React from 'react';
import { Button } from '../button/button';
import { red, green } from '../core/ts/color';

export interface Props {
  page: number,
  setPage: (page: number) => void,
  nbPages: number;
}

export const Pagination: React.VFC<Props> = ({page, setPage, nbPages}) => (
  <>
    <Button style={{color: red}} onClick={() => setPage(page - 1)}>{"Previous"}</Button>
    {`${page}/${nbPages}`}
    <Button style={{color: green}} onClick={() => setPage(page + 1)}>{"Next"}</Button>
  </>
);
