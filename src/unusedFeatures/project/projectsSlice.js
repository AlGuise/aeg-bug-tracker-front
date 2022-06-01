export function fetchProjects() {
    return function (dispatch) {
        dispatch({ type: "projectsLoading" });
        fetch("http://localhost:3000/projects")
            .then((res) => res.json())
            .then((data) => {
                dispatch({ type: "projects/projectsLoaded", payload: data});
            });
    }
}

const intialState = {
    projects: [], //array of projects
    status: ["idle"] //loading state
}

export default function projectsReducer(state = intialState, action) {
    switch (action.type) {
        case "projects/projectsLoading":
            return {
                ...state,
                status: "loading"
            };
        case "projects/projectsLoaded":
            return {
                ...state,
                projects: action.payload,
                status: "idle"
            };
        default:
            return state;
    }
};