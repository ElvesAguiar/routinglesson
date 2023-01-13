import {useParams} from 'react-router-dom'


function Produto(){

const {id} = useParams();

    return (
        <div>

            <h2>pagina detalhe do produto</h2>
            <spn>
                MEU PRODUTO É {id}
            </spn>
            
        </div>
    );
};

export default Produto;