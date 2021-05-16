import './Jobcard.css';
import img from '../../assets/design.svg';

const Jobcard = () => {

    return(
        <div className="jobCard">
            <div className="logo">
                <img src={img} alt="img" className='img'/>
            </div>
            <div className="info">
                <h1 className="search">
                    Full Stack Developer
                </h1>
                <h3>
                    Company Name - Location
                </h3>
                <p>
                    Remote
                </p>
                <button className='apply'>APPLY</button>
            </div>
        </div>
    )
}

export default Jobcard;