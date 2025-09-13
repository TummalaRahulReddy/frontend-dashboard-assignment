import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from './features/dashboard/dashboardSlice';
import './App.css';

const AddWidgetModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.dashboard.categories);
  
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id || '');
  
  const handleConfirm = () => {
    if (widgetName && selectedCategory) {
      const newWidget = {
        id: Date.now().toString(),
        name: widgetName,
        text: widgetText,
      };
      dispatch(addWidget({ categoryId: selectedCategory, newWidget }));
      onClose();
    } else {
      alert('Please fill in both the widget name and select a category.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>Add Widget</h3>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <label htmlFor="widget-name">Widget Name</label>
          <input
            id="widget-name"
            type="text"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
          />
          <label htmlFor="widget-text">Widget Text</label>
          <input
            id="widget-text"
            type="text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
          />
          <label htmlFor="category-select">Select Category</label>
          <select
            id="category-select"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetModal;