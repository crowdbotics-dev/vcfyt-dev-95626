import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kcdert_list = createAsyncThunk(
  "kcderts/api_v1_kcdert_list",
  async payload => {
    const response = await apiService.api_v1_kcdert_list(payload)
    return response.data
  }
)
export const api_v1_kcdert_create = createAsyncThunk(
  "kcderts/api_v1_kcdert_create",
  async payload => {
    const response = await apiService.api_v1_kcdert_create(payload)
    return response.data
  }
)
export const api_v1_kcdert_retrieve = createAsyncThunk(
  "kcderts/api_v1_kcdert_retrieve",
  async payload => {
    const response = await apiService.api_v1_kcdert_retrieve(payload)
    return response.data
  }
)
export const api_v1_kcdert_update = createAsyncThunk(
  "kcderts/api_v1_kcdert_update",
  async payload => {
    const response = await apiService.api_v1_kcdert_update(payload)
    return response.data
  }
)
export const api_v1_kcdert_partial_update = createAsyncThunk(
  "kcderts/api_v1_kcdert_partial_update",
  async payload => {
    const response = await apiService.api_v1_kcdert_partial_update(payload)
    return response.data
  }
)
export const api_v1_kcdert_destroy = createAsyncThunk(
  "kcderts/api_v1_kcdert_destroy",
  async payload => {
    const response = await apiService.api_v1_kcdert_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kcdertsSlice = createSlice({
  name: "kcderts",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_kcdert_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_kcdert_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_kcdert_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_kcdert_list,
  api_v1_kcdert_create,
  api_v1_kcdert_retrieve,
  api_v1_kcdert_update,
  api_v1_kcdert_partial_update,
  api_v1_kcdert_destroy,
  slice: kcdertsSlice
}
