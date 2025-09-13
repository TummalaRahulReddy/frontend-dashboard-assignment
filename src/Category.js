import React from 'react';
import Widget from './Widget';
import './App.css';

const Category = ({ category }) => {
  return (
    <div className="category-container">
      <h3>{category.name}</h3>
      <div className="widgets-grid">
        {category.widgets.map((widget) => (
          <Widget key={widget.id} widget={widget} categoryId={category.id} />
        ))}
      </div>
    </div>
  );
};

export default Category;