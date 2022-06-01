import React from 'react';

export default function TicketList ({ ticketsArray = []}) {
    return (
        <div>
            {ticketsArray.map((ticket)=> (
                <li key={ticket.project.id}>
                    {ticket.description}
                </li>
            ))}
        </div>
    )
}