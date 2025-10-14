import classes from './SkillScroll.module.css';
const skills = [
  "Cryptography",
  "CySA+",
  "Risk Management",
  "Penetration Testing",
  "Linux OS",
  "Windows OS",
  "Vulnerability Scanning",
  "Malware Analysis",
  "Security Fundamentals",
  "React JS",
  "CSS",
  "Python"
];

const SkillScroll = ()=>{
    return (
      <div className={classes.scroll_wrapper}>
        <div className={classes.scroll_content}>
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className={classes.scroll_tag}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
}

export default SkillScroll;
