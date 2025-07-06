import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface ContactState {
  loading: boolean
  success: boolean
  error: string | null
  message: string
}

const initialState: ContactState = {
  loading: false,
  success: false,
  error: null,
  message: "",
}

// Backend API URL - change this to your deployed backend URL
const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://aie-amaa.onrender.com" : "https://aie-amaa.onrender.com"
// const API_BASE_URL = process.env.NODE_ENV === "development" ? "https://aie-amaa.onrender.com" : "http://localhost:5000"

// Async thunk for submitting contact form
export const submitContactForm = createAsyncThunk(
  "contact/submit",
  async (
    formData: {
      firstName: string
      lastName: string
      email: string
      phone: string
      course: string
      branch: string
      message: string
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to submit form")
      }

      return data
    } catch (error) {
      return rejectWithValue("Network error. Please check your connection and try again.")
    }
  },
)

const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    resetContactState: (state) => {
      state.loading = false
      state.success = false
      state.error = null
      state.message = ""
    },
    clearContactError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitContactForm.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
        state.message = ""
      })
      .addCase(submitContactForm.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.message = action.payload.message
        state.error = null
      })
      .addCase(submitContactForm.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || "Something went wrong"
        state.success = false
        state.message = ""
      })
  },
})

export const { resetContactState, clearContactError } = contactSlice.actions
export default contactSlice.reducer
