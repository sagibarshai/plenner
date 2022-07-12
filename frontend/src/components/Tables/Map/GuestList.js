import * as React from 'react';
import Modal from '../../../common/Modal/Modal';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import GuestListItem from './GuestListItem';

export default function GuestList({ guestList, id }) {
  return (
    <Modal title={`Table ${id}`}>
      <TableContainer sx={{ maxHeight: 240 }}>
        <Table size="small">
          <TableBody>
            {guestList.map((guest) => (
              <GuestListItem {...guest} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      ;
    </Modal>
  );
}
