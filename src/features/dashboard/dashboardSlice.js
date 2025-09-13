import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../../dashboardData.json';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    categories: dashboardData.categories,
  },
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, newWidget } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets.push(newWidget);
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload;
      const category = state.categories.find(cat => cat.id === categoryId);
      if (category) {
        category.widgets = category.widgets.filter(widget => widget.id !== widgetId);
      }
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;