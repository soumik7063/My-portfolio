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
import FooterMain from './components/footerSection/FooterMain';
function App() {

  return (
    <main className=" text-white relative overflow-hidden">
      <Navbar/>
      <HeroMain/>
      <HeroGradient/>
      <SubHerosection/>
      <AboutmeMain/>
      <SkillMain/>
      <SubskillSection/>
      <ProjectMain/>
      <ContactMain/>
      <FooterMain/>
      <ToastContainer/>
    </main>
  )
}

export default App
