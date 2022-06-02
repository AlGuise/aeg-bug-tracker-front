import create from 'zustand'

const ticketStore = create((set) => ({
    tickets: [],
    setTicket: (tickets) => set((state) =>({
        ...state,
        tickets
    })),
}));

fetch("http://localhost:3000/tickets")
    .then((resp) => resp.json())
    .then((tickets) =>
        ticketStore.setState((state) => ({
            ...state,
            tickets,
})));



export default ticketStore