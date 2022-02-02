import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { Geocode } from "./utils";
import { ILocation } from './Map';

export enum Status {
    Loading = 'loading',
    Pending = 'pending',
    Rejected = 'rejected',
    Resolved = 'resolved',
}

interface IAddress {address: string}

interface IMapState {
    location: (ILocation & IAddress) | null,
    status: Status | null,
    error: unknown,
}

export const fetchLocation = createAsyncThunk(
    'map/fetch',
    async function (params: {coords: ILocation} | IAddress, {rejectWithValue, dispatch}) {
        if ("address" in params) {
            try {
                const response = await Geocode.fromAddress(params.address);
                const { lat, lng } = response.results[0].geometry.location;
                dispatch(updateLocation({lat, lng, address: params.address}))
            } catch (error: unknown) {
                const err = error as ErrorEvent;
                return rejectWithValue(err.message)
            }
        } else if ("coords" in params) {
            try {
                const response = await Geocode.fromLatLng(
                
                params.coords.lat.toString(),
                
                params.coords.lng.toString()
                );
                const address = response.results[0].formatted_address;
                
                dispatch(updateLocation({...params.coords, address}))
            } catch (error: unknown) {
                const err = error as ErrorEvent;
                return rejectWithValue(err.message)
            }
        }
    }
);

const initialState: IMapState = {
    location: null,
    status: null,
    error: null,
};

const mapSlice = createSlice({
    name: 'map',
    initialState: initialState,
    reducers: {
        updateLocation(state, action) {
            state.location = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchLocation.pending, (state) => {
            state.status = Status.Loading;
            state.error = null;
        })
        .addCase(fetchLocation.fulfilled, (state, action) => {
            state.status = Status.Resolved;
        })
        .addCase(fetchLocation.rejected, (state, action) => {
            state.status = Status.Rejected;
            state.error = action.payload;
        })
    },
});

export const selectCoords = (state: RootState) => ({lat: state.map.location?.lat, lng: state.map.location?.lng});
export const selectAddress = (state: RootState) => state.map.location?.address;

export const {updateLocation} = mapSlice.actions;

export default mapSlice.reducer;
