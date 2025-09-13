import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import AddWidgetModal from './AddWidgetModal';
import './App.css';

function App() {
  const categories = useSelector(state => state.dashboard.categories);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <header className="dashboard-header">
        <h1 className="dashboard-title">CNAPP Dashboard</h1>
        <button className="add-widget-btn" onClick={openModal}>+ Add Widget</button>
      </header>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      {isModalOpen && <AddWidgetModal onClose={closeModal} />}
    </div>
  );
}

export default App;