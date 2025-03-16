import { ToastContainer, toast } from 'react-toastify';
import Navbar from './components/Navbar'
import HeroMain from './components/heroSection/HeroMain'
import HeroGradient from './components/heroSection/HeroGradient'
import SubHerosection from './components/heroSection/SubHerosection'
import AboutmeMain from './components/AboutmeSection/AboutmeMain'
import SkillMain from './components/skillsection/SkillsMain'
import SubskillSection from './components/skillsection/SubskillSection'
import ProjectMain from './components/projectsSection/ProjectMain'
import ContactMain from './components/ContactSection/ContactMain'
function App() {

  return (
    <>
      <Navbar/>
      <HeroMain/>
      <HeroGradient/>
      <SubHerosection/>
      <AboutmeMain/>
      <SkillMain/>
      <SubskillSection/>
      <ProjectMain/>
      <ContactMain/>
      <ToastContainer/>
    </>
  )
}

export default App
