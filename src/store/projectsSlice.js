import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: []
    },
    reducers: {
        addProject: (state, action) => {
            state.projects.unshift(action.payload);
        },
        editProject: (state, action) => {
            state.projects[action.payload.index] = { 
                name: action.payload.name, 
                date: action.payload.date 
            }
        },
        deleteProject: (state, action) => {
            state.projects.splice(action.payload.index, 1);
        }
    }
})

export const { addProject, editProject, deleteProject } = projectsSlice.actions;
export const getProjects = state => state.projects.projects;
export const getProjectsLength = state => state.projects.projects.length
export default projectsSlice.reducer;