import './App.css';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Header from './components/header/Header';
import Jobcard from './components/jobcard/Jobcard';

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Jobcard />
      <Footer />
    </div>
  );
}

export default App;
