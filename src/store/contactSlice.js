import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  form: { name: "", email: "", message: "" },
  submitted: false,
};

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    setForm(state, action) {
      state.form = { ...state.form, ...action.payload };
    },
    submitForm(state) {
      state.submitted = true;
      state.form = { name: "", email: "", message: "" };
    },
    resetSubmitted(state) {
      state.submitted = false;
    },
  },
});

export const { setForm, submitForm, resetSubmitted } = contactSlice.actions;
export default contactSlice.reducer;
