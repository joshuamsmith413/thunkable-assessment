import React, { useState } from 'react';
import "src/fonts/source-sans-pro/SourceSansPro-Regular.otf";

import 'src/styles/./App.scss';
import Header from './components/Header';
import NewProjectForm from './components/NewProjectForm';
import ProjectList from './components/ProjectList';

function App() {
  const [formShow, setFormShow] = useState<boolean>(false);

  return (
    <div className={`app ${formShow && 'hover'}`}>
      <Header setFormShow={setFormShow} formShow={formShow} />
      {formShow && <NewProjectForm setFormShow={setFormShow} />}
      <ProjectList /> 
    </div>
  );
}

export default App;
