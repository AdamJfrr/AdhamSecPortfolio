import classes from './CertificationsBlock.module.css';
import CertificationBox from './CertificationBox';
import im_1 from '../images/im_1.png';
import im_2 from '../images/2.png';
import im_3 from '../images/3.png';
const CertificationsBlock = ()=>{
  return (
    <div className={classes.certification_block}>
      <div className={classes.header}><p className={classes.title}>Certifications</p></div>
      <div className={classes.certification_grid}>
        <CertificationBox source={im_1}/>
        <CertificationBox source={im_3}/>
        <CertificationBox source={im_2}/>
      </div>
    </div>
  )
}
export default CertificationsBlock;
