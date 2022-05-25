import { createSlice , createAsyncThunk} from '@reduxjs/toolkit'
import axios  from 'axios'
import {getUrl,API_URL} from '../../api/apiUrls'
const initialState = {
    loading: false,
    banners: [],
    categoriesList: [],
    error: ''
}

const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchBanners.pending, (state) =>{
            state.loading = true
        })
        builder.addCase(fetchBanners.fulfilled, (state,action) =>{
            state.loading = false
            state.banners = action.payload
            state.error = ''
        })
        builder.addCase(fetchBanners.rejected, (state,action) =>{
            state.loading = false
            state.banners = []
            state.error = action.error.message
        })
    }
})

// async Actions
export const fetchBanners = createAsyncThunk(
    'home/fetchBanners', async () => {
           return axios.get(getUrl(API_URL.fetchBanners)).then((res)  => {
               return res.data
           }).catch((err) => {
            return err
        });
   }
  )


// selector


export default homeSlice