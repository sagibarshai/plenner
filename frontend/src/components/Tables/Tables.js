import React, { useState, useEffect } from 'react';
import {
  Header,
  MainTitle,
  ButtonsContainer,
  Button,
  ButtonText,
  BodyContainer,
} from './styledComponents';
import { ReactComponent as AddIcon } from '../../images/svg/add.svg';
import Map from './Map/Map';
import axios from 'axios';
import AddTable from './addTable/AddTable';
const Tables = () => {
  const [showAddTablePopup, setShowAddTablePopup] = useState(false);
  const [tables, setTables] = useState();
  const togglePopupHandler = () => {
    setShowAddTablePopup((prevState) => !prevState);
  };

  const getTables = async () => {
    const tables = await axios.get('http://localhost:8000/arrange_seats/', {
      headers: { event_id: 1 },
    });
    let guestData = tables.data.seating_arrangement;
    let tableData = tables.data.tables.map((table) => ({
      guests: [],
      ...table,
    }));

    guestData.forEach((guest) => {
      tableData.forEach((table) => {
        if (table.id === guest.venue_table_id) {
          table.guests.append(guest);
          if (!table.availableSeats) {
            table.availableSeats = table.seats - guest.attending;
          } else {
            table.availableSeats -= guest.attending;
          }
        }
      });
    });
    // setTables(tableData);
  };

  const generateSeats = async () => {
    console.log('start to get data');
    const tables = await axios.post(
      'http://localhost:8000/arrange_seats/',
      null,
      {
        headers: { event_id: 1 },
      }
    );
    const tableData = tables.data.response_json;
    setTables(tableData);
  };

  useEffect(() => {
    generateSeats();
  }, []);
  return (
    <>
      {showAddTablePopup && (
        <AddTable togglePopupHandler={togglePopupHandler} />
      )}
      <Header>
        <MainTitle>Seating Arrangement</MainTitle>
        <ButtonsContainer>
          <Button onClick={togglePopupHandler} color="white">
            <AddIcon />
            <ButtonText>Add Table</ButtonText>
          </Button>
        </ButtonsContainer>
      </Header>
      <BodyContainer>
        {/* <Button
          center
          display="inline-block"
          marginTop="28px"
          onClick={generateSeats}
        >
          Generate Seats
        </Button> */}
        <Map tables={tables}></Map>
      </BodyContainer>
    </>
  );
};
export default Tables;
