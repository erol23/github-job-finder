import "./Form.css";
import { useRef } from "react";

const Form = ({ newQuery }) => {
  const description = useRef();
  const location = useRef();

  return (
    <div className="form">
      <h1>GITHUB JOB FINDER</h1>
      <form action="" className="form">
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
          onClick={() =>
            newQuery(description.current.value, location.current.value)
          }
          type="button"
          className="input button"
        >
          SEARCH
        </button>
      </form>
    </div>
  );
};

export default Form;
