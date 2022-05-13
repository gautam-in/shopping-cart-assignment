import { configureStore } from '@reduxjs/toolkit'
import reducers from './reducer'
import LoadState from './save.store'

const stateLoader = new LoadState();
export const store = configureStore({
    reducer:reducers ,
    preloadedState : stateLoader.loadState()
})


    store.subscribe(() => {
        stateLoader.saveState(store.getState());
    });
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store