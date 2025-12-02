import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  message: '',
  submitted: false,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setForm: (state, action) => {
      state[action.payload.field] = action.payload.value;
    },
    submitForm: (state) => {
      state.submitted = true;
    },
    resetSubmitted: (state) => {
      state.submitted = false;
      state.name = '';
      state.email = '';
      state.message = '';
    },
  },
});

export const { setForm, submitForm, resetSubmitted } = contactSlice.actions;
export default contactSlice.reducer;
