import create from 'zustand'

const projectStore = create((set) => ({
    projects: [],

    setProject: (projects) => set((state) =>({
        ...state,
        projects
    })),
}));

fetch("http://localhost:3000/projects/")
    .then((resp) => resp.json())
    .then((projects) => 
        projectStore.setState((state) => ({
            ...state,
            projects,
})));

export default projectStore