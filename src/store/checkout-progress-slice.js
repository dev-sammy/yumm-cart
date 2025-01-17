import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { PURCHASE_PROGRESS } from "../constants/progress";
import { sendHttpRequest } from "../util/http";

export const checkoutOrderData = createAsyncThunk(
  "checkout progress/submitOrderData",
  async ({ api, payload }) => {
    return sendHttpRequest(api, payload);
  }
);

const initialState = {
  currentStep: PURCHASE_PROGRESS.CLOSE,
  error: null,
  loading: false,
};

const checkoutProgressSlice = createSlice({
  name: "checkout progress",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkoutOrderData.fulfilled, (state, action) => {
        if(action.payload?.message === "Order created!"){
            state.currentStep = PURCHASE_PROGRESS.ORDER_SUCCESS;
        }
        state.loading = false;
        state.error = null;
      })
      .addCase(checkoutOrderData.rejected, (state, action) => {
        state.error = action.error?.message || 'Error submitting order! Please try again.'
        state.loading = false;
      })
      .addCase(checkoutOrderData.pending, (state, action) => {
        state.loading = true;
      });
  },
});

export default checkoutProgressSlice.reducer;

export const checkoutProgressActions = checkoutProgressSlice.actions;
