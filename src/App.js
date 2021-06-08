import "./App.css";
import axios from "axios";
import Footer from "./components/footer/Footer";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
import Jobcard from "./components/jobcard/Jobcard";
import loading from "./assets/loading.gif";
import notFound from "./assets/404.png";
import { useState } from "react";

function App() {
  const [load, setLoad] = useState(false);
  const [jobs, setJobs] = useState();

  // const handleEnter = (e) => {
  //   e.preventDefault();
  //   newQuery();
  // } 
  const newQuery = (description, location) => {
    setLoad(true);
    axios({
      method: "get",
      url: `/positions.json?description-${description}&location=${location}`,
    })
      .then((res) => {
        setJobs(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoad(false));
    };

  return (
    <div className="App">
      <Header />
      <Form newQuery={newQuery} />
      {jobs?.length === 0  ?<img src={notFound} alt="" className='notFound'/> : null}
      {load ? <img src={loading} alt="" className="loading" /> : null}
      {jobs?.map((job) => (
        <Jobcard job={job} key={job.id} />
        ))}
      <Footer />
    </div>
  );
}

export default App;
