import projectStore from './projectStore'
import ticketStore from '../tickets/ticketStore'

export default function Projects() {

    const projects = projectStore((state) => state.projects)
    const tickets = ticketStore((state) => state.tickets)

    return (
            <div className="project-title">
                {projects.map(({id, name, deadline}) => (
                    <p key={id}>
                        <p>{name} due by {deadline}</p>         
                        {tickets.map(({id, description, project_id, submitted_by}) => (
                            <li key={id}>{project_id}: {description}
                            <br/>
                            Submitted by: {submitted_by}
                            </li>
                        ))}
                    </p>
                ))}
            </div> 
    )
}