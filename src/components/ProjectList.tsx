import React from 'react';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';
import { getProjects } from 'src/store/projectsSlice';

export default function ProjectList() {
    const projects = useSelector(getProjects);

    return (
        <div className="project-list">
            {projects.length > 0 && 
                projects.map((project: { name: string, date: string }, index: number) => {
                    return (
                        <ListItem project={project} index={index} />           
                    )
                })
            }
        </div>
    )
}