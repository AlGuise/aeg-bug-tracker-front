import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RoleList from './RoleList';
import { fetchRoles } from './rolesSlice';

export default function Roles() {

    const rolesArray = useSelector ((state) => state.roles);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRoles());
    }, [])

    return (
        <div>
            <h1>Roles List</h1>
            <RoleList rolesArray={rolesArray} />
        </div>
    )
}