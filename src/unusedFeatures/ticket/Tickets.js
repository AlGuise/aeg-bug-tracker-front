import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TicketList from './TicketList';
import { fetchTickets } from './ticketsSlice';

export default function Tickets() {

    const ticketsArray = useSelector ((state) => state.tickets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTickets());
    }, [dispatch])

    return (
        <div>
            <h1>Ticket List</h1>
            <TicketList ticketsArray={ticketsArray} />
        </div>
    )
}