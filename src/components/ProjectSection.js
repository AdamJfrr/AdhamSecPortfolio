import classes from './ProjectSection.module.css';
import ProjectRow from './ProjectRow';

const ProjectSection = ()=>{
  return (
    <div className={classes.project_section}>
      <div className={classes.header}><p className={classes.title}>Projects</p></div>
      <div className={classes.content}>
        <ProjectRow name='TechShield Vulnerability Assessment'
        description='Comprehensive vulnerability assessment and digital forensic analysis on simulated IT infrastructure, security risks, and threat artifacts, including a structured VAPT report with risk classifications, technical findings, remediation recommendations, and professional documentation.'githubLink="https://github.com/AdamJfrr/VAPT-Report-TechShield"/>
        <ProjectRow name='SOC Detection Lab'
        description='Interactive portfolio showcasing 14 production-ready Splunk detection rules mapped to MITRE ATT&CK. Demonstrates advanced SPL proficiency, alert engineering, and threat detection across 6 tactics'githubLink="https://AdamJfrr.github.io/soc-detection-lab"/>
      </div>
    </div>
  )
}
export default ProjectSection;
