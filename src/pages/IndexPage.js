import classes from './IndexPage.module.css';
import SkillScroll from '../components/SkillScroll';
import CertificationsBlock from '../components/CertificationsBlock';
import ProjectSection from '../components/ProjectSection';
function IndexPage() {
  return (
    <div className={classes.indexPage}>
      <div className={classes.upperDiv}>
        <p className={classes.bio}>
        Hi there, I’m Adham — a cybersecurity enthusiast blending hands-on experience with analytical precision
        to detect threats, strengthen systems, and protect organizations in an ever-changing digital world.
        I also bring a creative edge and strong front-end development skills to bridge security and design.
        </p>
      </div>
      <SkillScroll/>
      <CertificationsBlock/>
      <ProjectSection/>
    </div>
  )
}
export default IndexPage;
