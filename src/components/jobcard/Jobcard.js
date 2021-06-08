import "./Jobcard.css";
import img from "../../assets/design.svg";
import jobLogo from '../../assets/job-logo.svg';
const Jobcard = ({ job }) => {
  return (
    <div className="jobCard">
      <div className="logo">
        <img src={job.company_logo ?? jobLogo} alt="img" className="img" />
      </div>
      <div className="info">
        <h1 className="search">{job.title}</h1>
        <h3>{job.company}</h3>
        <p>{job.type}</p>
        <a className="apply" href={job.company_url}>
          <button className="apply" type="button">
            APPLY
          </button>
        </a>
      </div>
    </div>
  );
};

export default Jobcard;
