import { logout, login } from "../actions/postAction";

const initialState = {};

export default function postReducer(state = initialState, action) {
    switch (action.type) {
        case login:
        return action.payload;
        default:
            return state;

            case logout:
}
}