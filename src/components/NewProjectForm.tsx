import React, { KeyboardEvent, useState, Dispatch, SetStateAction } from 'react';

import 'src/styles/NewProjectForm.scss';
import ListRow from './ListRow';
import { addProject } from 'src/store/projectsSlice';
import { useDispatch } from 'react-redux';

type Props = {
    setFormShow: Dispatch<SetStateAction<boolean>>;
}
export default function NewProjectForm({setFormShow}: Props) {
    const [projectName, setProjectName] = useState<string>('');

    const dispatch = useDispatch()

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.code === "Enter") {
            const date = new Date()
                .toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: "2-digit", 
                    minute: "2-digit", 
                    hour12: true 
                }).replace(/at/g,'')
                setProjectName('');
                setFormShow(false);
            dispatch(addProject({ date: date, name: projectName }));
        }
    }

    const input = (
        <input 
            className="form-input"
            type="text"
            placeholder="Name your project"
            value={projectName} onChange={(e) => setProjectName(e.target.value)}
            onKeyDown={(e) => handleKeyPress(e)}
        />
    )

    return (
      
        <ListRow 
            child={input}
        />
    )
}
