import './Footer.css';
import img from '../../assets/design.svg';

const Footer = () => {


    return(
        <div className="footer">
            <p><span>erol23</span> <img src={img} alt="designLogo" className='logo' /> DESING</p>
        </div>
    )
}

export default Footer;