import "./Form.css";
import { useRef } from "react";

const Form = ({ newQuery }) => {
  const description = useRef();
  const location = useRef();

  const handleEnter = (e) => {
    e.preventDefault();
    newQuery(description.current.value, location.current.value);
    description.current.value = '';
    location.current.value = '';
  }
  return (
    <div className="form">
      <h1>GITHUB JOB FINDER</h1>
      <form action="" className="form" onSubmit={handleEnter}>
        <input
          ref={description}
          type="text"
          placeholder="DESCRIPTION"
          className="input"
        />
        <input
          ref={location}
          type="text"
          placeholder="LOCATION"
          className="input"
        />
        <button
          type="submit"
          className="input button"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Form;
