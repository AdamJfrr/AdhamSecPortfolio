import classes from './CertificationBox.module.css';
const CertificationBox = (props) => {
  return (
    <div className={classes.box}>
      <div className={classes.cert_image}><img src={props.source}/></div>
    </div>
  )
}
export default CertificationBox;
