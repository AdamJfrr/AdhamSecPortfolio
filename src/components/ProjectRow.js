import classes from './ProjectRow.module.css';

const ProjectRow = (props) => {
  return (
    <a
      href={props.githubLink}
      className={classes.linkWrapper}
    >
      <div className={classes.row}>
        <p className={classes.projectName}>{props.name}</p>
        <p className={classes.projectDescription}>
          Comprehensive vulnerability assessment and digital forensic analysis on simulated IT infrastructure, security risks, and threat artifacts,
          including a structured VAPT report with risk classifications, technical findings, remediation recommendations, and professional documentation.
        </p>
        <span className={classes.arrow}>&gt;</span>
      </div>
    </a>
  );
};

export default ProjectRow;
