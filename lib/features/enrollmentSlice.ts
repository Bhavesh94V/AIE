import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

interface EnrollmentState {
  loading: boolean
  success: boolean
  error: string | null
  message: string
  studentId: string | null
}

const initialState: EnrollmentState = {
  loading: false,
  success: false,
  error: null,
  message: "",
  studentId: null,
}

// Backend API URL - change this to your deployed backend URL
const API_BASE_URL = process.env.NODE_ENV === "production" ? "https://your-backend-domain.com" : "http://localhost:5000"

// Async thunk for submitting enrollment form
export const submitEnrollmentForm = createAsyncThunk(
  "enrollment/submit",
  async (
    formData: {
      firstName: string
      lastName: string
      email: string
      phone: string
      selectedCourse: string
      dateOfBirth: string
      currentEducation: string
      address: string
      branch: string
      parentName?: string
      parentPhone?: string
    },
    { rejectWithValue },
  ) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/enrollment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        return rejectWithValue(data.message || "Failed to submit enrollment")
      }

      return data
    } catch (error) {
      return rejectWithValue("Network error. Please check your connection and try again.")
    }
  },
)

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    resetEnrollmentState: (state) => {
      state.loading = false
      state.success = false
      state.error = null
      state.message = ""
      state.studentId = null
    },
    clearEnrollmentError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitEnrollmentForm.pending, (state) => {
        state.loading = true
        state.error = null
        state.success = false
        state.message = ""
        state.studentId = null
      })
      .addCase(submitEnrollmentForm.fulfilled, (state, action) => {
        state.loading = false
        state.success = true
        state.message = action.payload.message
        state.studentId = action.payload.studentId
        state.error = null
      })
      .addCase(submitEnrollmentForm.rejected, (state, action) => {
        state.loading = false
        state.error = (action.payload as string) || "Something went wrong"
        state.success = false
        state.message = ""
        state.studentId = null
      })
  },
})

export const { resetEnrollmentState, clearEnrollmentError } = enrollmentSlice.actions
export default enrollmentSlice.reducer
