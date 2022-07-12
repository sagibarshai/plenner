import React from 'react';
import { TableName, TableInfoContainer } from './styledComponents';

export default function TableInfo({ name, seatStatus }) {
  return (
    <TableInfoContainer>
      <TableName>{name}</TableName>
      <div>{seatStatus}</div>
    </TableInfoContainer>
  );
}
