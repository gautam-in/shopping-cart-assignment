import { createSlice } from '@reduxjs/toolkit';

const getToastSettings = (type) => {
    switch (type) {
        case "success":
            return {
                title: "Success",
                backgroundColor: '#5cb85c',
                icon: "check.svg"
            };
        case "danger":
            return {
                title: "Danger",
                backgroundColor: '#d9534f',
                icon: "error.svg"
            };
        case "info":
            return {
                title: "Info",
                backgroundColor: '#5bc0de',
                icon: "info.svg"
            };
        case "warning":
            return {
                title: "Warning",
                backgroundColor: '#f0ad4e',
                icon: "warning.svg"
            };
    }
};

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        list: [],
    },
    reducers: {
        showMessage: (state, action) => {
            state.list.push({
                ...getToastSettings(action.payload.type),
                ...action.payload,
                id: state.list.length + 1
            });
        },
        removeMessage: (state, action) => {
            state.list = state.list.filter((toast) => toast.id !== action.payload.id);
        }
    },
})

export const { showMessage, removeMessage } = toastSlice.actions

export default toastSlice.reducer;
