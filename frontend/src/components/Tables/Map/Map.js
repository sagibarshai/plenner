import React from 'react';
import Table from './Table';
import { MapContainer } from './styledComponents';

export default function Map({ tables }) {
  return (
    <MapContainer>
      {tables &&
        tables.map((table) => (
          <Table
            seatCount={table.seats}
            seatStatus={`${table.seats - table.available_seats}/${table.seats}`}
            shape={table.shape}
            guestList={table.guests}
            id={table.venue_table_id}
          />
        ))}
    </MapContainer>
  );
}
