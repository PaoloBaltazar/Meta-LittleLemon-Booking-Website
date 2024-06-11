import './ConfirmedBooking.css'
import { Link, useLocation } from 'react-router-dom'
import confirmedCheck from '../Assets/ConfirmedCheck.svg'

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state.formData;

  return (
    <div className='confirmed'>
      <div className="confirmed-container">
        <img src={confirmedCheck}/>
        <h1 className='confirmed-heading'>Booking Confirmed</h1>
        <p className='confirmed-subtitle'>We are pleased to inform you that your reservation has been received and confirmed. Thank you!</p>
      </div>

      <div className='booking-details-container'>
        <div className='booking-details'>
          <div>
            <p>DATE: <b>{formData.date}</b></p>
          </div>

          <div>
            <p>TIME: <b>{formData.time}</b></p>
          </div>

          <div>
            <p>GUESTS: <b>{formData.guests}</b></p>
          </div>

          <div>
            <p>OCCASSION: <b>{formData.occassion}</b></p>
          </div>

          <div>
            <p>SEATING: <b>{formData.seating}</b></p>
          </div>

          <Link to='/'>
            <button className='confirmed-home-button'>Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ConfirmedBooking;