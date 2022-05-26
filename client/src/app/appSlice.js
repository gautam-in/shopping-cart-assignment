import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'
import {getUrl,API_URL} from '../api/apiUrls'
import {ROUTES} from '../utils/constants'
const initialState = {
    loading: false,
    categoriesList: [],
    error: ''
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategories.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchCategories.fulfilled, (state,action) =>{
            state.loading = false
            state.categoriesList = action.payload
            state.error = ''
        })
        builder.addCase(fetchCategories.rejected, (state,action) =>{
            state.loading = false
            state.categoriesList = []
            state.error = action.error.message
        })
    }
})

// async Actions
export const fetchCategories = createAsyncThunk(
    'app/fetchCategories', async () => {
           return axios.get(getUrl(API_URL.fetchCategories)).then((res)  => {
               let sortedCategories = res.data.sort((a,b) => (a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0))
               return sortedCategories
           }).catch((err) => {
               return err
           });
   }
  )


// selector

export const {  setDoumentTitle } = appSlice.actions
export default appSlice