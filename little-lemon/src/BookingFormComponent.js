import React, { useState, useEffect } from 'react';
import './BookingFormComponent.css'; // Import the CSS file

const seedRandom = function (seed) {
  var m = 2 ** 35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function (date) {
  let result = [];
  let random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() > 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const BookingFormComponent = ({ handleFormSubmit }) => {
  const [date, setDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasions, setOccasions] = useState('Birthday');
  const [reservationStatus, setReservationStatus] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    // Fetch available times when the component mounts
    fetchAvailableTimes();
  }, []);

  const fetchAvailableTimes = () => {
    // Paraphrased version of the fetchAPI function
    const seedRandomFunction = seedRandom(new Date(date).getDate());
    const result = [];
    for (let i = 17; i <= 23; i++) {
      if (seedRandomFunction() < 0.5) {
        result.push(i + ':00');
      }
      if (seedRandomFunction() > 0.5) {
        result.push(i + ':30');
      }
    }
    setAvailableTimes(result);
  };

  useEffect(() => {
    // Fetch available times when the date changes
    fetchAvailableTimes();
  }, [date, fetchAvailableTimes]); // Include fetchAvailableTimes in the dependency array

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const renderTimeOptions = () => {
    return (
      <React.Fragment>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </React.Fragment>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit({ date, selectedTime, guests, occasions });

    // Simulate a reservation success message
    setReservationStatus('Table is reserved!');
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="book-date">Choose Date:</label>
              <input id="book-date" value={date} onChange={handleChange} type="date" required />
            </div>
            <div className="form-group">
              <label htmlFor="book-time">Choose Time:</label>
              <select id="book-time" value={selectedTime} onChange={handleTimeChange}>
                {renderTimeOptions()}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests:</label>
              <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="book-occasions">Occasion:</label>
              <select id="book-occasions" value={occasions} onChange={(e) => setOccasions(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>
            <div className="btnReceive">
              <input aria-label="onClick" type="submit" value={'Make Your Reservation'} />
            </div>
          </fieldset>
        </form>

        {/* Display reservation status */}
        {reservationStatus && <div className="confirm">{reservationStatus}</div>}
      </section>
    </header>
  );
};

export default BookingFormComponent;