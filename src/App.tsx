import React, { useState } from 'react';
import "src/fonts/source-sans-pro/SourceSansPro-Regular.otf";

import 'src/styles/./App.scss';
import Header from './components/Header';
import NewProjectForm from './components/NewProjectForm';
import ProjectList from './components/ProjectList';

function App() {
  const [formShow, setFormShow] = useState<boolean>(false);
  const [background, setBackground] = useState<boolean>(false);
  
  const setFormAndBackground = () => {
    setFormShow(true);
    setBackground(true);
  }

  return (
    <div className={`app ${background && 'hover'}`}>
      <Header setFormAndBackground={setFormAndBackground} formShow={formShow} />
      {formShow && <NewProjectForm setFormShow={setFormShow} />}
      <ProjectList /> 
    </div>
  );
}

export default App;
