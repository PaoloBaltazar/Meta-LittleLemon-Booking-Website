import { useState } from "react";
import { useNavigate } from 'react';
import React from 'react';
import './BookingForm.css'

const BookingForm = (props) => {

  const[name, setName] = useState('');
  const[date, setDate] = useState('');
  const[time, setTime] = useState('');
  const[guests, setGuests] = useState(1);
  const[occassion, setOcassion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name,
      date,
      time,
      guests,
      occassion
    };
    props.submitForm(formData)
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  }

  return (
    <div className="booking-container">

      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="input-layout grid-name">
            <label for="res-name">Name</label>
            <input
              className="name-input"
              type="text"
              id="res-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="input-layout grid-date">
            <label for="res-date">Choose date</label>
            <input
              className="date-input"
              type="date"
              id="res-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              required
            />
          </div>

          <div className="input-layout grid-time">
            <label for="res-time">Choose time</label>
            <select
              className="time-input"
              id="res-time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            >
                <option value="" disabled>Select Time</option>
                {
                  props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                }
            </select>
          </div>

          <div className="input-layout grid-guest">
            <label for="guests">Number of guests</label>
            <input
              className="guest-input"
              type="number"
              placeholder="1-20"
              min="1"
              max="10"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            />
          </div>

          <div className="input-layout grid-occassion">
            <label for="occasion">Occasion</label>
            <select
              className="occassion-input"
              id="occasion"
              value={occassion}
              key={occassion}
              onChange={(e) => setOcassion(e.target.value)}
            >
                <option value="" disabled>Select Occassion</option>
                <option>Casual Dining</option>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
          </div>

          <div className="grid-button">
            <input
              className="button-input"
              type="submit"
              value="Make Your reservation"/>
          </div>
        </fieldset>
      </form>
      <div className="booking-text-container">
        <h1 className="booking-title">MAKE YOUR RESERVATION</h1>
        <p className="booking-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  );
}

export default BookingForm;
