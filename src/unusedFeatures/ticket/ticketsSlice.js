export function fetchTickets() {
    return function (dispatch) {
        dispatch({ type: "ticketsLoading" });
        fetch("http://localhost:3000/tickets")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "tickets/ticketsLoaded", payload: data});
            });
    }
}

const intialState = {
    tickets: [], //array of tickets
    status: ["idle"] //loading state
}

export default function ticketsReducer(state = intialState, action) {

    switch (action.type) {
        case "tickets/ticketsLoading":
            return {
                ...state,
                status: "loading"
            }
        case "tickets/ticketsLoaded":
            return {
                ...state,
                tickets: action.payload,
                status: "idle"
            }
        default:
            return state;
    }
};