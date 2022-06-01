import React from 'react';

export default function ProjectList({ projectsArray = []}) {
    return (
        <div>
            {projectsArray.map((project)=> (
                <p key={project.id}>
                    {project.name}
                    <li key={project.id}>
                        Due by {project.deadline}
                    </li>
                </p>
            ))}
        </div>
    )
}