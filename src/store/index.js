import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from 'src/store/projectsSlice';

export default configureStore({ 
    reducer: { 
        projects: projectsSlice
    }
})