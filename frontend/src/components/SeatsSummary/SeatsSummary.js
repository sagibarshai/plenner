import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWrapper, AStyled, SeatsSummaryStyled } from './styledComponent';
import { ReactComponent as Chair } from '../../images/svg/chair.svg';

const getSeatsStatus = async () => {
  try {
    const { data } = await axios.get('http://localhost:8000/arrange_seats/seats_status', {
      headers: { event_id: 1 }
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

function SeatsSummary(props) {
  const [seatSum, setSeatSum] = useState({
    totalSeats: '',
    takenSeats: ''
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const { total_seats, taken_seats } = await getSeatsStatus();
        setSeatSum({
          totalSeats: total_seats,
          takenSeats: taken_seats
        });
      } catch (err) {
        console.log(err);
      }
    };
    
    getData();
  }, []);

  return (
    <SeatsSummaryStyled className={props.className}>
      <h2>Seats</h2>
      <CircularProgressbarWrapper>
        <CircularProgressbarWithChildren
          value={!seatSum.takenSeats ? "0" :seatSum.takenSeats }
          maxValue={seatSum.totalSeats}
          styles={buildStyles({
            strokeLinecap: 'butt',
            pathColor: '#5CEB73'
          })}
        >
          <Chair />
          <p>
            <strong>{!seatSum.takenSeats ? "0" :seatSum.takenSeats}</strong>/{seatSum.totalSeats}
          </p>
          <h5>Taken Seats</h5>
        </CircularProgressbarWithChildren>
      </CircularProgressbarWrapper>
      <AStyled href='/tables'>view list</AStyled>
    </SeatsSummaryStyled>
  );
}

export default SeatsSummary;
