export function fetchRoles() {
    return function (dispatch) {
        dispatch({ type: "rolesLoading" });
        fetch("http://localhost:3000/roles")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "roles/rolesLoaded", payload: data});
            });
    }
}

const intialState = {
    roles: [], //array of roles
    status: ["idle"] //loading state
}

export default function rolesReducer(state = intialState, action) {

    switch (action.type) {
        case "roles/rolesLoading":
            return {
                ...state,
                status: "loading"
            }
        case "roles/rolesLoaded":
            return {
                ...state,
                roles: action.payload,
                status: "idle"
            }
        default:
            return state;
    }
};