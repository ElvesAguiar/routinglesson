import {Link} from 'react-router-dom'

function Contact() {
    return (
      <div>
        <h1>Contato</h1><br></br>
        <span>contato da empresa: (dd) xxxxxx-xxxxxxx</span>

        <br/>


        <Link to="/">Home</Link><br/>
        <Link to="/sobre">Sobre</Link><br/>
      </div>
    );
  };
  
  export default Contact;
  