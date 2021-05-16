import './Header.css';
import cat from '../../assets/octocat.png';
import job from '../../assets/job-logo.svg';

const Header = () => {



    return(
        <div className="header">
            <img src={cat} alt="octocatLogo" className='image'/>
            <img src={job} alt="jobLogo" className='image'/>
        </div>
    )
}

export default Header;