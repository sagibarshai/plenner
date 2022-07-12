import React, { useEffect, useState } from 'react';
import Csv from './Csv';
import Filter from './Filter';
import InvitationSender from './InvitationSender';
import { CSVsectionStyled, TitleStyled, FilterSectionStyled, InvitationSectionStyled } from './styledComponent';
import GuestList from './GuestList';
import guestsData from './guests.json';
import AddGuest from './AddGuest';
import InvitationModal from '../Invitation/InvitationModal';
import axios from 'axios';

export default function Guests() {
  const API_URL = 'http://localhost:8000/';
  const [initialData, setInitialData] = useState([]);
  const [filteredData, setFilteredData] = useState(initialData);
  const [dataToSend] = useState(guestsData);
  const [searchQuery, setQuery] = useState('');
  const [attendingFiltered, setAttendingFiltered] = useState(null);
  const [sideFiltered, setSideFiltered] = useState(null);
  const [groupFiltered, setGroupFiltered] = useState(null);
  const [guestNumToSendMessage, setGusetNumToSendMessage] = useState(0);
  const [guestsToSendMessage, setGuestsToSendMessage] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [showInvetationModal, setShowInvetationModal] = useState(false);
  const search = (query) => {
    setQuery(query);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const result = await axios.get(API_URL + 'guests', {
      headers: {
        event_id: 1,
        user_id: 1
      }
    });
    console.log({ result });
    setInitialData(result.data);
    setGuestsToSendMessage([]);
  };
  useEffect(() => {
    console.log({ attendingFiltered, sideFiltered, groupFiltered, initialData });
    let filteredData = initialData;
    if (attendingFiltered) {
      filteredData = filteredData.filter((item) =>
        attendingFiltered !== 'all'
          ? item.attending.toLowerCase() === attendingFiltered.toLowerCase()
          : item.attending > -1
      );
    }
    if (sideFiltered) {
      filteredData = filteredData.filter((item) =>
        sideFiltered !== 'brideAndGroom' ? item.side.toLowerCase() === sideFiltered.toLowerCase() : item.side.length > 0
      );
    }
    if (groupFiltered) {
      filteredData = filteredData.filter((item) =>
        groupFiltered !== 'all' ? item.group.toLowerCase() === groupFiltered.toLowerCase() : item.group.length > 0
      );
    }
    if (searchQuery) {
      filteredData = filteredData.filter((item) => item.full_name.toLowerCase().includes(searchQuery.toLowerCase()));
    }
    setFilteredData(filteredData);
    console.log({ attendingFiltered, sideFiltered, groupFiltered, initialData });
  }, [attendingFiltered, sideFiltered, groupFiltered, initialData, searchQuery]);

  return (
    <div>
      <CSVsectionStyled>
        <TitleStyled>Guests</TitleStyled>
        <Csv guestsData={initialData} setOpenModal={setOpenModal} />
        <InvitationModal
          guestArray={guestsToSendMessage}
          eventId={1}
          showInvetationModal={showInvetationModal}
          setShowInvetationModal={setShowInvetationModal}
          onSubmitHandler={fetchData}
        />
      </CSVsectionStyled>
      <AddGuest openModal={openModal} setOpenModal={setOpenModal} onSubmitHandler={fetchData}></AddGuest>
      <FilterSectionStyled>
        <Filter
          guestsData={initialData}
          attendingFiltered={attendingFiltered}
          sideFiltered={sideFiltered}
          groupFiltered={groupFiltered}
          setAttendingFiltered={setAttendingFiltered}
          setSideFiltered={setSideFiltered}
          setGroupFiltered={setGroupFiltered}
          onSearch={search}
        />
      </FilterSectionStyled>
      <InvitationSectionStyled>
        <InvitationSender
          guestsData={dataToSend}
          numberOfGuestsToSend={guestsToSendMessage.length}
          totalGuests={initialData.length}
          showInvetationModal={showInvetationModal}
          setShowInvetationModal={setShowInvetationModal}
        />
      </InvitationSectionStyled>
      <GuestList
        guestNumToSendMessage={guestNumToSendMessage}
        setGusetNumToSendMessage={setGusetNumToSendMessage}
        guestsData={filteredData}
        guestsToSendMessage={guestsToSendMessage}
        setGuestsToSendMessage={setGuestsToSendMessage}
        initialData={initialData}
        setInitialData={setInitialData}
        setShowInvetationModal={setShowInvetationModal}
      />
    </div>
  );
}
