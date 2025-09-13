import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector
import Category from './Category';
import AddWidgetModal from './AddWidgetModal'; // Import the new modal component
import './App.css';

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const categories = useSelector(state => state.dashboard.categories);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="dashboard-page">
      <h2>CNAPP Dashboard</h2>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
      <button className="add-widget-btn" onClick={openModal}>+ Add Widget</button>
      {isModalOpen && <AddWidgetModal onClose={closeModal} />}
    </div>
  );
};

export default Dashboard;