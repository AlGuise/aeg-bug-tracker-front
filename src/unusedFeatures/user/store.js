import create from 'zustand'

export const useStore = create((set) => ({
    filter: "",
    tickets: [],
    projects: [],
    users: [],
    teams: [],

    setFilter: (filter) => set((state) => ({
        ...state,
        filter,
    })),

    setTicket: (tickets) => set((state) =>({
        ...state,
        tickets
    })),
    setProject: (projects) => set((state) =>({
        ...state,
        projects
    })),
    setUser: (users) => set((state) =>({
        ...state,
        users
    })),
    setTeam: (teams) => set((state) =>({
        ...state,
        teams
    }))
}));

fetch("http://localhost:3000/tickets")
.then((resp) => resp.json())
.then((tickets) =>
useStore.setState((state) => ({
    ...state,
    tickets,
})))

fetch("http://localhost:3000/projects")
.then((resp) => resp.json())
.then((projects) => 
useStore.setState((state) => ({
    ...state,
    projects,
})))