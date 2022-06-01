import create from 'zustand'

const userStore = create((set) => ({
    users: [],
    setUsers: (users) => set((state) => ({
        ...state,
        users
    })),
}));

fetch("http://localhost:3000/users")
    .then((resp) => resp.json())
    .then((users) =>
        userStore.setState((state) => ({
            ...state,
            users,
})));

export default userStore