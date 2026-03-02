
import { Routes, Route } from "react-router-dom"
import "./App.css"
import HomePage from './components/HomePage'
import JobsPage from './components/jobs/JobsPage'
import NotesPage from './components/notes/NotesPage'
import GetData from './components/GetData'
import PageNotFound from './components/PageNotFound'
import ProductsPage from './components/products/ProductsPage'
import MensPage from './components/products/MensPage'
import WomensPage from './components/products/WomensPage'
import CoursesPage from './components/courses/CoursePage'
import CourseCategory from './components/courses/CourseCategory'
import Header from "./components/Header"

const App = () => {

  return (
    <div className='full-page'>
      {/* Navigate to Home, Back & Next using useNavigate Hook (inside the Header component) */}
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job-portal" element={<JobsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/get-data" element={<GetData />} />
        
        {/* Nested Routing using <Outlet /> for child comp - visually tabbing effect with url change */}
        <Route path="/products" element={<ProductsPage />} >
          <Route path="men" element={<MensPage />} />
          <Route path="women" element={<WomensPage />} />
        </Route>

        {/* Dynamic Routing - type anything after /courses, it'll redirect to CourseCategory Page */}
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseCategory />} />

        {/* No page found - 404 routing using "*" as path to catch all unmatched routes */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  )
}

export default App
