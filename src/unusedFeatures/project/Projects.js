import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectList from './ProjcetList';
import { fetchProjects } from './projectsSlice';

export default function Projects() {

    const projectsArray = useSelector ((state) => state.projects);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProjects());
    }, [])

    return (
        <div>
            <h1>Project List</h1>
            <ProjectList projectsArray={projectsArray} />
        </div>
    )
};