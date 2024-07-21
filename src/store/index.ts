import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import listReducer, { toggleIsOpen } from './listSlice';

const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    actionCreator: toggleIsOpen,
    effect: async (_, api) => {
        localStorage.setItem('store', JSON.stringify(api.getState()));
    },
});

const store = configureStore({
    reducer: {
        list: listReducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
