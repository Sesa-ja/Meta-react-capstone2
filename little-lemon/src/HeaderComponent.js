// HeaderComponent.js
import React, { useState } from 'react';
import restaurantImage from '../src/icons_assets/restauranfood.jpg';
import BookingFormComponent from './BookingFormComponent';

const HeaderComponent = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [reservationStatus, setReservationStatus] = useState('');

  const toggleBookingForm = () => {
    setShowBookingForm(!showBookingForm);
    setReservationStatus('');
  };

  const handleFormSubmit = (formData) => {
    // Implement your logic for form submission
    // For demonstration purposes, let's simulate a successful reservation
    // You can replace this with your actual logic (e.g., API call)
    console.log('Form submitted with data:', formData);

    // Simulate a reservation success message
    setReservationStatus('Table is reserved');
  };

  const headerStyle = {
    backgroundColor: '#495e57',
    padding: '40px 0',
  };

  const sectionStyle = {
    color: '#EDEFEE',
    padding: '10px 13%',
    position: 'relative',
  };

  const contentStyle = {
    fontSize: '1.5em',
    maxWidth: '600px',
    margin: '0 auto',
  };

  const heading2Style = {
    color: '#F4CE14',
    fontSize: '40px',
  };

  const heading3Style = {
    fontSize: '25px',
  };

  const paragraphStyle = {
    fontSize: '20px',
    maxwidth: '520px',
    lineHeight: '1.5',
    marginBottom: '30px',
  };

  const buttonStyle = {
    fontSize: '20px',
    padding: '14px 18px',
    backgroundColor: '#F4CE14',
    color: 'black',
    border: 'none',
    borderRadius: '2px',
    cursor: 'pointer',
  };

  const bannerImgStyle = {
    position: 'absolute',
    right: '13%',
    top: '15%',
    width: '400px',
  };

  const bannerInnerImgStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '20px',
  };

  return (
    <header style={headerStyle}>
      <section style={sectionStyle}>
        <div style={contentStyle} className='banner'>
          <h2 style={heading2Style}>Little Lemon</h2>
          <h3 style={heading3Style}>Chicago</h3>
          <p style={paragraphStyle}>
            Little Lemon Restaurant is a culinary gem that captivates the senses with its vibrant flavors and welcoming ambiance. Nestled in a quaint corner, this establishment guarantees a distinctive gastronomic experience, featuring a diverse menu that spans from delightful appetizers to tantalizing main courses. The restaurant prides itself on sourcing fresh, local ingredients for each dish, ensuring a burst of freshness in every bite. From the moment guests step through the door, they are embraced by a warm and inviting atmosphere, creating the perfect backdrop for both casual gatherings and special occasions.
          </p>
          {showBookingForm ? (
            <>
              <BookingFormComponent handleFormSubmit={handleFormSubmit} />
              {reservationStatus && <p>{reservationStatus}</p>}
            </>
          ) : (
            <button style={buttonStyle} onClick={toggleBookingForm}>
              Reserve a table
            </button>
          )}
        </div>

        <div style={bannerImgStyle} className='banner-img'>
          <img src={restaurantImage} alt='' style={bannerInnerImgStyle} />
        </div>
      </section>
    </header>
  );
};

export default HeaderComponent;