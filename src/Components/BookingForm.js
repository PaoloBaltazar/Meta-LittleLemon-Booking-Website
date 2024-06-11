import { useState } from "react";
import { useNavigate } from 'react';
import React from 'react';
import './BookingForm.css'

const BookingForm = (props) => {

  const[date, setDate] = useState('');
  const[time, setTime] = useState('');
  const[guests, setGuests] = useState(1);
  const[occassion, setOcassion] = useState('');
  const[seating, setSeating] = useState('')
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[phoneNumber, setPhoneNumber] = useState('');
  const[specialRequest, setSpecialRequest] = useState('');
  const[formStep, setFormStep] = useState(1);

  const handleNextClick = () => {

    if (!date || !time || !guests || !occassion || !seating) {
      return;
    }

    setFormStep(2);
  }

  const handlePreviousClick = () => {
    setFormStep(1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occassion,
      seating
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
        {formStep === 1 && (
          <fieldset className="grid-seating">
            <h1 className="row0col1">Booking a Table</h1>

            <div className="row1col1">
              <label className="label-input" for="res-date">Choose date</label>
              <input
                className="date-input"
                type="date"
                id="res-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </div>

            <div className="row1col2">
              <label className="label-input" for="res-time">Choose time</label>
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

            <div className="row2col1">
              <label className="label-input" for="guests">Number of guests</label>
              <input
                className="guest-input"
                type="number"
                placeholder="1-20"
                min="1"
                max="20"
                id="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>

            <div className="row2col2">
              <label className="label-input" for="occasion">Occasion</label>
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

            <div className="row3col1">
              <input
                type="radio"
                id="indoor"
                name="seating"
                value="Indoor"
                checked={seating === 'Indoor'}
                onChange={(e) => setSeating(e.target.value)}
              />
              <label className='radio' htmlFor="indoor">Indoor seating</label>
            </div>

            <div className="row3col2">
              <input
                type="radio"
                id="outdoor"
                name="seating"
                value="Outdoor"
                checked={seating === 'Outdoor'}
                onChange={(e) => setSeating(e.target.value)}
              />
              <label className='radio' htmlFor="outdoor">Outdoor seating</label>
            </div>

            <div className="row4col1">
              <button className="res-button" disabled>Previous</button>
              <button className="res-button" onClick={handleNextClick}>Next</button>
            </div>

          </fieldset>
        )}
        {formStep === 2 && (
          <fieldset className="grid-contact">
            <h1 className="row0col1-second">Contact Details</h1>
            <div className="row1col1-second">
              <label className="label-input" for="res-name">First Name</label>
              <input
                className="firstname-input"
                type="text"
                value={firstName}
                id="res-name"
                onChange={(e) => setFirstName(e.target.value)}
                required
                placeholder="First name"
              />
            </div>

            <div className="row1col2-second">
              <label className="label-input" for="res-name">Last Name</label>
              <input
                className="lastname-input"
                type="text"
                id="res-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                placeholder="Last name"
              />
            </div>

            <div className="row2col1-second">
              <label className="label-input" htmlFor="email">Email</label>
              <input
                className="email-input"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@company.com"
              />
            </div>

            <div className="row2col2-second">
              <label className="label-input" htmlFor="phone-number">Phone Number</label>
              <input
                className="phone-input"
                type="tel"
                id="phone-number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
                placeholder="(123) 456-7890"
              />
            </div>

            <div className="row3col1-second">
              <label className="label-input" htmlFor="special-request">Special Request</label>
              <textarea
                className="request-input"
                id="special-request"
                value={specialRequest}
                onChange={(e) => setSpecialRequest(e.target.value)}
              />
            </div>

            <div className="row4col1-second">
              <button className="res-button" onClick={handlePreviousClick}>Previous</button>
              <input
                className="res-button"
                type="submit"
                value="Book"
              />
            </div>

          </fieldset>
        )}
        
      </form>
      <div className="booking-text-container">
        <h1 className="booking-title">MAKE YOUR RESERVATION</h1>
        <p className="booking-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
      </div>
    </div>
  );
}

export default BookingForm;
