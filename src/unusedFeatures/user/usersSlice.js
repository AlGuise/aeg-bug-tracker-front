export function fetchUsers() {
    return function (dispatch) {
        dispatch({ type: "usersLoading" });

//check for correct fetch address

        fetch("http://localhost:3000/users")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "users/usersLoaded", payload: data.user_name});
            });
    }
}

const intialState = {
    users: [], //array of users
    status: ["idle"] //loading state
}

export default function usersReducer(state = intialState, action) {

    switch (action.type) {
        case "users/usersLoading":
            return {
                ...state,
                status: "loading"
            }
        case "users/usersLoaded":
            return {
                ...state,
                users: action.payload,
                status: "idle"
            }
        default:
            return state;
    }
};