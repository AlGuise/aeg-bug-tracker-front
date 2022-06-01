import teamStore from './teamStore'

export default function Teams() {
    const teams = teamStore((state) => state.teams)

    return (
            <div>
                {teams.map(({id, name, users}) => (
                    <p key={id}>
                        <p>{name} has {users.length} members and their names are {users[0].user_name}, {users[1].user_name}, {users[2].user_name}, and {users[3].user_name}!</p>
                    </p>
                ))}
            </div> 
    )
}