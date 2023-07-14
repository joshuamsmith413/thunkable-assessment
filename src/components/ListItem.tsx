import React, { KeyboardEvent, MouseEvent, useState } from 'react';
import {  useDispatch } from 'react-redux';
import { editProject, deleteProject } from 'src/store/projectsSlice';
import { Popconfirm } from 'antd';
import ListRow from './ListRow';
import EditIcon from 'src/assets/EditIcon.svg';
import EditHoverIcon from 'src/assets/EditIcon_Hover.svg';
import DeleteIcon from 'src/assets/DeleteIcon.svg';
import DeleteHoverIcon from 'src/assets/DeleteIcon_Hover.svg';

import 'src/styles/ProjectList.scss';

type Props = {
    index: number;
    project: {
        name: string,
        date: string
    }
}

export default function ListItem({ project, index }: Props) {
    const [editting, setEditting] = useState<boolean>(false);
    const [newName, setNewName] = useState<string>('');
    const [openConfirm, setOpenConfirm] = useState<boolean>(false);

    const dispatch = useDispatch();

    const mouseOver = (e: MouseEvent<HTMLImageElement>, icon: string) => {
        e.currentTarget.src = icon;
    }

    const mouseOut = (e: MouseEvent<HTMLImageElement>, icon: string) => {
        e.currentTarget.src = icon;
    }

    const handleEdit = (index: number) => {
        setEditting(true);
        setNewName(project.name)
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.code === "Enter") {
            const date = new Date()
                .toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric', 
                    hour: "2-digit", 
                    minute: "2-digit", 
                    hour12: true 
                }).replace(/at/g,'');

                dispatch(editProject({ index: index, date: date, name: newName }));
                setEditting(false);
                setNewName('');
        }
    }
    
    const showConfirm = (e: MouseEvent<HTMLImageElement>) => {
        e.stopPropagation()
        setOpenConfirm(true)
    }

    const handleDelete = (index: number) => {
        dispatch(deleteProject({index: index}));
        setOpenConfirm(false)
    }

    return (
        <ListRow key={index} child={(
            <div className="project-item-inner" >
                {editting ? 
                    <input 
                        className="form-input"
                        type="text"
                        placeholder="Name your project"
                        value={newName} onChange={(e) => setNewName(e.target.value)}
                        onKeyDown={(e) => handleKeyPress(e, index)}
                    /> 
                    : <span className="project-title">{project.name.substring(0, 16)}</span>
                }
                <img 
                    src={EditIcon} 
                    alt="edit icon" 
                    className="edit-icon"
                    onMouseOver={e => mouseOver(e, EditHoverIcon)}
                    onMouseOut={e => mouseOut(e, EditIcon)}
                    onClick={() => handleEdit(index)}
                />
                <span className="date">{project.date}</span>
                <img 
                    src={DeleteIcon} 
                    alt="delete icon" 
                    className="delete-icon"
                    onMouseOver={e => mouseOver(e, DeleteHoverIcon)}
                    onMouseOut={e => mouseOut(e, DeleteIcon)}
                    onClick={e => showConfirm(e)}
                />
                 <Popconfirm
                    title="Are you sure you want to delete this project?"
                    description="This action can't be undone."
                    cancelText="No"
                    okText="Yes"
                    open={openConfirm}
                    onConfirm={() => handleDelete(index)}
                    onCancel={() => setOpenConfirm(false)}
                    />
            </div>
        )} />
    )
}