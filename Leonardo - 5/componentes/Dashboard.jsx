import React, { useState } from "react";
import "./Dashboard.css";
import Header from './Header';
import Footer from './Footer';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Dashboard() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowDatePicker(false); // Ocultar el calendario después de seleccionar una fecha
  };

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <>
      <Header />
      <div className="container-dash">
        <div className="dash-header">
          <h3>Dashboard</h3>
          <div className="date-picker">
            <div onClick={toggleDatePicker} className="toggle-button">
              Cambiar Fecha o Período
            </div>
            {showDatePicker && (
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                inline
              />
            )}
          </div>
        </div>
        <div className="dash-sections">
          <section className='dash-sect'>
            <p>68</p>
            <p>Ordenes del dia de hoy</p>
          </section>
          <section className='dash-sect'>
            <p>12</p>
            <p>Usuarios Nuevos</p>
          </section>
          <section className='dash-sect'>
            <p>$100,000,000</p>
            <p>Ingresos de hoy</p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;