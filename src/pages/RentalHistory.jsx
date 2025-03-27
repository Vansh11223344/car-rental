import React from 'react';
import Header from '../components/Header';
import './RentalHistory.css';

const RentalHistory = () => {
  const rentals = [
    // Sample data - in a real app, this would come from state/API
    { car: "Toyota Corolla", rentalDate: "2025-03-01", returnDate: "2025-03-05", status: "Completed" }
  ];

  return (
    <div className="rental-history-page">
      <Header title="Rental History" />
      <main>
        <section className="rental-history">
          <h2>Your Rental History</h2>
          <table className="rental-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Rental Date</th>
                <th>Return Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rentals.map((rental, index) => (
                <tr key={index}>
                  <td>{rental.car}</td>
                  <td>{rental.rentalDate}</td>
                  <td>{rental.returnDate}</td>
                  <td>{rental.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <footer>
        <p>© 2025 Car Rental Platform</p>
      </footer>
    </div>
  );
};

export default RentalHistory;