import { AiFillCloseCircle } from 'react-icons/ai';
import { FaHeart, FaRegHeart  } from "react-icons/fa";
import './Card.css'

const Card = ({nome,imagem, cargo, corDeFundo, aoDeletar, id, favorito, aoFavoritar}) => {
    function favoritar(){
        aoFavoritar(id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className='colaborador'>
        <AiFillCloseCircle 
            size={25} 
            className='deletar'
            onClick={() => aoDeletar(id)} 
        />
            <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
                <img src={imagem} alt='{props.nome}'/>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <div className='favoritar'>
                    {favorito 
                        ? <FaHeart {...propsFavorito} color='#ff0000'/> 
                        : <FaRegHeart {...propsFavorito} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Card