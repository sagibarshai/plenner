import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function GuestListItem(guest) {
  return (
    <TableRow sx={{ border: 0 }}>
      <TableCell>{guest.full_name}</TableCell>
      <TableCell>{`+${guest.extra_guests}`}</TableCell>
      <TableCell>{`${guest.side}'s ${guest.group}`}</TableCell>
    </TableRow>
  );
}
