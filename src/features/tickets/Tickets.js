import ticketStore from "./ticketStore"

export default function Tickets() {
    const tickets = ticketStore((state) => state.tickets)

    return (
        <div className="ticket-descriptions">
                {tickets.map(({id, description, priority, project_id}) => (
                    <p key={id}>
                        <p>{project_id}</p>
                        <p>{description}</p>
                        <p>{priority}</p>
                    </p>
                ))}
        </div>
    )
}
