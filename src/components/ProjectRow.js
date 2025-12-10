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
          {props.description}
        </p>
        <span className={classes.arrow}>&gt;</span>
      </div>
    </a>
  );
};

export default ProjectRow;
