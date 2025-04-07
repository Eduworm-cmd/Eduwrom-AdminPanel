import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { AdminPanelLayout } from './Layouts/AdminPanelLayout';
import { Dashboard } from './Pages/Dashboard/Dashboard';  
import { LessonManagement } from './Pages/Dashboard/LessonManagement/LessonManagement';
import { Add_Lesson } from './Pages/Dashboard/LessonManagement/Add_Lesson';
import RichtoolEditor from './components/RichtoolEditor/RichtoolEditor';

function App() {
  return (
    <BrowserRouter>
      <Routes>      
        <Route path='/' element={<AdminPanelLayout />}>
          <Route path='home' element={<Dashboard />} />
          <Route path='lesson/manage' element={<LessonManagement />} />
          <Route path='Add/lesson' element={<Add_Lesson />} />
          <Route path='editor' element={<RichtoolEditor />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
