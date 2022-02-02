import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export enum Status {
    Loading = 'loading',
    Pending = 'pending',
    Rejected = 'rejected',
    Resolved = 'resolved',
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    count: number;
}

interface IProductsState {
    products: IProduct[] | null,
    status: Status | null,
    error: unknown,
}

const baseUrl = 'http://localhost:3001';

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch(`${baseUrl}/products`);
            
            if (!response.ok) {
                throw new Error('Server Error!');
            }
    
            const data = await response.json();
    
            return data;
        } catch (error: unknown) {
            const err = error as ErrorEvent;
            return rejectWithValue(err.message);
        }
    }
);

export const removeProduct = createAsyncThunk(
    'products/removeProduct',
    async function(id: number, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`${baseUrl}/products/${id}`, {
                method: 'DELETE',
            })

            if (!response.ok) {
                throw new Error('Can\'t remove product. Server error.');
            }

            dispatch(remove({id}));

        } catch (error: unknown) {
            const err = error as ErrorEvent;
            return rejectWithValue(err.message);
        }
    }
);

export const incProductQuantity = createAsyncThunk(
    'products/inc',
    async function (id: number, {rejectWithValue, dispatch, getState}) {
        const product = ((getState() as RootState)?.products?.products?.find((product: IProduct) => product.id === id) as IProduct);

        try {
            const response = await fetch(`${baseUrl}/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    count: product.count + 1,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t change quantity. Server error.');
            }

            dispatch(inc({id}));

        } catch (error: unknown) {
            const err = error as ErrorEvent;
            return rejectWithValue(err.message)
        }
    }
);

export const decProductQuantity = createAsyncThunk(
    'products/dec',
    async function (id: number, {rejectWithValue, dispatch, getState}) {
        const product = ((getState() as RootState)?.products?.products?.find((product: IProduct) => product.id === id) as IProduct);

        try {
            const response = await fetch(`${baseUrl}/products/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    count: product.count - 1,
                })
            });

            if (!response.ok) {
                throw new Error('Can\'t change quantity. Server error.');
            }

            dispatch(dec({id}));

        } catch (error: unknown) {
            const err = error as ErrorEvent;
            return rejectWithValue(err.message)
        }
    }
);

const initialState: IProductsState = {
    products: [],
    status: null,
    error: null,
};

const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        inc(state, action) {
            const product = state.products?.find(product => product.id === action.payload.id);
            if (product) {
                product.count = product.count + 1;
            }
        },
        dec(state, action) {
            const product = state.products?.find(product => product.id === action.payload.id);
            
            if (product) {
                product.count = product.count - 1;
            }
        },
        remove(state, action) {
            if (state.products) {
                state.products = state.products.filter(product => product.id !== action.payload.id);
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.status = Status.Loading;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = Status.Resolved;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = Status.Rejected;
            state.error = action.payload;
        })
        .addCase(removeProduct.rejected, (state, action) => {
            state.status = Status.Rejected;
            state.error = action.payload;
        })
        .addCase(incProductQuantity.rejected, (state, action) => {
            state.status = Status.Rejected;
            state.error = action.payload;
        })
        .addCase(decProductQuantity.rejected, (state, action) => {
            state.status = Status.Rejected;
            state.error = action.payload;
        })
    },
});

export const selectTotal = (state: RootState) => state.products.products?.reduce((acc, product) => {
    const {price, count} = product;

    return acc + price * count;

}, 0);

export const selectProducts = (state: RootState) => state.products.products;

export const {inc, dec, remove} = productsSlice.actions;

export default productsSlice.reducer;
