import './ConfirmedBooking.css'
import { useLocation } from 'react-router-dom'

const ConfirmedBooking = () => {
  const location = useLocation();
  const formData = location.state.formData;
  
  return (
    <>
      <div className="confirmed-container">
        <h1>Booking Confirmed</h1>
        <p>We are pleased to inform you that your reservation has been received and confirmed. Thank you!</p>

        <div className='booking-details'>
          <div>
            <p>Name: <br/> {formData.name}</p>
          </div>

          <div>
            <p>Date: <br/> {formData.date}</p>
          </div>

          <div>
            <p>Time: <br/> {formData.time}</p>
          </div>

          <div>
            <p>Guests: <br/> {formData.guests}</p>
          </div>

          <div>
            <p>Occassion: <br/> {formData.occassion}</p>
          </div>
        </div>
        
      </div>

      

      <div className='booking-details-container'>



      </div>
    </>
  )
}

export default ConfirmedBooking;