import './Form.css';

const Form = () => {

    return(
        <div className="form">
            <h1>GITHUB JOB FINDER</h1>
            <form action="" className="form">
                <input type="text" placeholder='DESCRIPTION' className='input'/>
                <input type="text" placeholder='LOCATION' className='input'/>
                <button type="submit" className='input button'>SEARCH</button>
            </form>
        </div>
    )
}

export default Form;