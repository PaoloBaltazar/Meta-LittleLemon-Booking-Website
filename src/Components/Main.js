import React from 'react';
import Homepage from './Homepage';
import BookingPage from './BookingPage'
import ConfirmedBooking from './ConfirmedBooking'
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

const Main = () => {

  const seedRandom = function(seed){
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function(){
      return (s = s * a % m) / m;
    }
  }

  const fetchAPI = function(date){
    let result = [];
    let random = seedRandom(date.getDate());
    for (let i = 17; i <=23; i++){
      if(random() < 0.5){
        result.push(i + ':00');
      }
      if(random() > 0.5){
        result.push(i + ':30');
      }
    }
    return result;
  }

  const submitAPI = function(formData){
    return true;
  }

  const initialState = {availableTimes: fetchAPI(new Date())}
  const [state, dispatch] = useReducer(updateTimes, initialState);

  function updateTimes(state, date){
    return{availableTimes: fetchAPI(new Date(date))}
  }

  const navigate = useNavigate();

  function submitForm (formData){
    if(submitAPI(formData)){
      navigate("/confirmed", {state: { formData}} );
    }
  }

  return (
    <main>
      <Routes>
        <Route path="/Meta-LittleLemon-Booking-Website" element={<Homepage/>}/>
        <Route path="/booking" element={<BookingPage availableTimes={state} dispatch={dispatch} submitForm={submitForm}/>}/>
        <Route path="/confirmed" element={<ConfirmedBooking/>}/>
      </Routes>
    </main>
  );
}

export default Main;