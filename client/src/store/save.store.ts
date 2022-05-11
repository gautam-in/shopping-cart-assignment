import { StoreStateProps } from "../type";
export default class StateLoader {
    loadState() {
        try {
            let serializedState = localStorage.getItem(window.location.host + ":state");

            if (serializedState === null) {
                return this.initializeState();
            }

            return JSON.parse(serializedState);
        }
        catch (err) {
            return this.initializeState();
        }
    }

    saveState(state: StoreStateProps) {
        try {
            let serializedState = JSON.stringify(state);
            localStorage.setItem(window.location.host + ":state", serializedState);

        }
        catch (err) {
        }
    }

    initializeState() {
        return {}
    };
}