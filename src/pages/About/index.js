import {Link} from 'react-router-dom'

function About() {
    return (
      <div>
        <h1>About</h1><br></br>
        <Link to="/">Home</Link><br/>
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default About;
  