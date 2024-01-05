import hexToRgba from 'hex-to-rgba';
import Card from '../Card'
import './Time.css'

const Time = ({colaboradores,cor,nome, aoDeletar, mudarCor, id, aoFavoritar}) => {

    const handleDeletar = (colaboradorId, index) => {
        aoDeletar(colaboradorId, index)
    }

    return (
       (colaboradores.length > 0) ? 
       <section className='time' style={{backgroundColor: hexToRgba(cor, '0.6')}}>
            <input onChange={evento => mudarCor(evento.target.value, id)} value={Time.cor} type='color' className='inputCor'/>
            <h3 style={{borderColor: cor}}>{nome}</h3>
            <div className='colaboradores'>
            {colaboradores.map((colaborador, index) => {
                return <Card 
                corDeFundo={cor}
                id={colaborador.id}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo}
                imagem={colaborador.imagem} 
                aoDeletar={() => handleDeletar(colaborador.id, index)} 
                colaborador={colaborador}
                aoFavoritar={aoFavoritar}
                favorito={colaborador.favorito}
            />
            })}
            </div>
        </section> : ''
    )
}

export default Time