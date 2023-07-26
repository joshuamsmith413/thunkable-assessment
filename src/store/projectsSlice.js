import { createSlice } from "@reduxjs/toolkit";

export const projectsSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [],
        projectId: 0
    },
    reducers: {
        increaseProjectId: (state) => {
            state.projectId += 1;
        },
        addProject: (state, action) => {
            state.projects.unshift(action.payload);
        },
        editProject: (state, action) => {
            const index = state.projects.findIndex(item => {
                return item.id === action.payload.id
            }) 
            
            state.projects[index] = { 
                id: action.payload.id,
                name: action.payload.name, 
                date: action.payload.date 
            }
        },
        deleteProject: (state, action) => {
            const index = state.projects.findIndex(item => {
                return action.payload.id === item.id
            })
            state.projects.splice(index, 1);
        }
    }
})

export const { addProject, editProject, deleteProject, increaseProjectId } = projectsSlice.actions;
export const getProjects = state => state.projects.projects;
export const getProjectsLength = state => state.projects.projects.length;
export const getProjectId = state => state.projects.projectId;
export default projectsSlice.reducer;