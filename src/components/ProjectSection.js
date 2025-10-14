import classes from './ProjectSection.module.css';
import ProjectRow from './ProjectRow';

const ProjectSection = ()=>{
  return (
    <div className={classes.project_section}>
      <div className={classes.header}><p className={classes.title}>Projects</p></div>
      <div className={classes.content}>
        <ProjectRow name='TechShield Vulnerability Assessment' githubLink="https://github.com/AdamJfrr/VAPT-Report-TechShield"/>
      </div>
    </div>
  )
}
export default ProjectSection;
