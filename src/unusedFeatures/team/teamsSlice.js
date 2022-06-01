export function fetchTeams() {
    return function (dispatch) {
        dispatch({ type: "teamsLoading" });
        fetch("http://localhost:3000/teams")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "teams/teamsLoaded", payload: data.name});
            });
    }
}

// const intialState = {
//     teams: [], //array of teams
//     status: ["idle"] //loading state
// }

// export default function teamsReducer(state = intialState, action) {

//     switch (action.type) {
//         case "teams/teamsLoading":
//             return {
//                 ...state,
//                 status: "loading"
//             }
//         case "teams/teamsLoaded":
//             return {
//                 ...state,
//                 teams: action.payload,
//                 status: "idle"
//             }
//         default:
//             return state;
//     }
// };