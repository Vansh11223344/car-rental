import React from 'react';
import Header from '../components/Header';
import './Maintenance.css';

const Maintenance = () => {
  const maintenanceSchedule = [
    { car: "Toyota Corolla", date: "2025-04-15", service: "Oil Change" },
    { car: "Honda Civic", date: "2025-04-20", service: "Brake Check" },
  ];

  return (
    <div className="maintenance-page">
      <Header title="Maintenance Schedule" />
      <main>
        <section className="maintenance-schedule">
          <h2>Upcoming Maintenance</h2>
          <table className="maintenance-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Date</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              {maintenanceSchedule.map((item, index) => (
                <tr key={index}>
                  <td>{item.car}</td>
                  <td>{item.date}</td>
                  <td>{item.service}</td>
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

export default Maintenance;