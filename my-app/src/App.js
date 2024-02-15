import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import StudentSection from './components/StudentSection';
import TeacherSection from './components/TeacherSection';
import './App.css';
import Body from './components/Body';

function App() {
  return (
    <>
    <div className="App">
      <Header />
      {/* <Route path="/student" component={StudentSection} /> */}
      {/* <Route path="/teacher" component={TeacherSection} /> */}
      <Body/>
    </div>
  </>
  );
}

export default App;
