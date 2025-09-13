 import React, { useState } from 'react';

const Modal = ({ onClose, onAdd }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      onAdd(widgetName, widgetText);
    }
  };

  return (
    <div className="add-widget-modal">
      <div className="modal-content">
        <button onClick={onClose} className="remove-widget-btn">&times;</button>
        <h3>Add New Widget</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Widget Name"
            value={widgetName}
            onChange={(e) => setWidgetName(e.target.value)}
            required
          />
          <textarea
            placeholder="Widget Text"
            value={widgetText}
            onChange={(e) => setWidgetText(e.target.value)}
            required
          />
          <button type="submit" className="add-widget-btn">Add Widget</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;