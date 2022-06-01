import create from "zustand"

const teamStore = create((set) => ({
    teams: [],
    setUser: (teams) => set((state) => ({
        ...state,
        teams
    })),
}));

fetch("http://localhost:3000/teams")
    .then((resp) => resp.json())
    .then((teams) => 
        teamStore.setState((state) => ({
            ...state,
            teams,
})));

export default teamStore