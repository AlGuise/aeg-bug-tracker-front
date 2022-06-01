import React from 'react';

export default function RoleList ({ rolesArray = []}) {
    return (
        <div>
            {rolesArray.map((role)=> (
                <p key={role.id}>
                    {role.user.user_name}: {role.role_title}
                </p>
            ))}
        </div>
    )
}