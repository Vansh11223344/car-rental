import React, { useState } from 'react';
import Header from '../components/Header';
import Chatbox from '../components/Chatbox';
import './Home.css';

const carsData = [
  { id: 1, model: "Toyota Corolla", available: true, image: "toyota.jpg", price: 45, type: "Sedan" },
  { id: 2, model: "Honda Civic", available: true, image: "honda.jpg", price: 50, type: "Sedan" },
  { id: 3, model: "Ford Mustang", available: true, image: "ford.jpg", price: 85, type: "Sports" },
];

const Home = () => {
  const [cars, setCars] = useState(carsData);
  const [searchTerm, setSearchTerm] = useState('');
  const [showChatbox, setShowChatbox] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [bookingDates, setBookingDates] = useState({ start: '', end: '' });

  const searchCars = () => {
    const filteredCars = carsData.filter(car =>
      car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      car.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCars(filteredCars);
  };

  const bookCar = (carId) => {
    const car = cars.find(c => c.id === carId);
    setSelectedCar(car);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (selectedCar && bookingDates.start && bookingDates.end) {
      alert(`Booked ${selectedCar.model} from ${bookingDates.start} to ${bookingDates.end}`);
      setSelectedCar(null);
      setBookingDates({ start: '', end: '' });
    }
  };

  return (
    <div className="home">
      <Header title="Our Car Rentals" />
      
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Rent Your Perfect Ride Today</h1>
        <p>Choose from our premium selection of vehicles</p>
      </section>

      <main>
        {/* Search Section */}
        <section className="search-section">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by model or type (e.g., Sedan, SUV)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={searchCars} className="search-btn">Find Cars</button>
          </div>
        </section>

        {/* Car List */}
        <section className="car-list">
          <h2>Available Vehicles</h2>
          <div className="car-container">
            {cars.map(car => (
              <div key={car.id} className="car-card" style={{ backgroundImage: `url(${car.image})` }}>
                <div className="car-info">
                  <h3>{car.model}</h3>
                  <p className="car-type">{car.type}</p>
                  <p className="car-price">${car.price}/day</p>
                  <button 
                    onClick={() => bookCar(car.id)} 
                    className="book-btn"
                    disabled={!car.available}
                  >
                    {car.available ? 'Book Now' : 'Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Booking Modal */}
        {selectedCar && (
          <div className="booking-modal">
            <div className="modal-content">
              <h2>Book {selectedCar.model}</h2>
              <form onSubmit={handleBookingSubmit}>
                <div className="form-group">
                  <label>Start Date:</label>
                  <input
                    type="date"
                    value={bookingDates.start}
                    onChange={(e) => setBookingDates({...bookingDates, start: e.target.value})}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>End Date:</label>
                  <input
                    type="date"
                    value={bookingDates.end}
                    onChange={(e) => setBookingDates({...bookingDates, end: e.target.value})}
                    required
                  />
                </div>
                <div className="modal-actions">
                  <button type="submit" className="confirm-btn">Confirm Booking</button>
                  <button 
                    type="button" 
                    className="cancel-btn" 
                    onClick={() => setSelectedCar(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      {/* Chat Support */}
      <button className="chat-toggle" onClick={() => setShowChatbox(true)}>
        <span>💬</span> Need Help?
      </button>
      {showChatbox && <Chatbox onClose={() => setShowChatbox(false)} />}

      <footer>
        <div className="footer-content">
          <p>© 2025 Car Rentals. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;