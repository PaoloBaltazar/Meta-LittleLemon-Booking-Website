import BookingForm from './BookingForm.js'

const BookingPage = (props) => {
  return (
    <>
      <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
    </>
  )
}

export default BookingPage;