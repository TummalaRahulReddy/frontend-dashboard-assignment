import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from './features/dashboard/dashboardSlice';
import './App.css';

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="widget-card">
      <div className="widget-header">
        <h4>{widget.name}</h4>
        <span className="remove-icon" onClick={handleRemove}>×</span>
      </div>
      <p className="widget-text">{widget.text}</p>
    </div>
  );
};

export default Widget;