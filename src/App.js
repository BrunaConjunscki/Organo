import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() { 

  const [times, setTimes] = useState ([
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Programação',
      cor: '#d9f7e9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Front-End',
      cor: '#e8f8ff'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'UX e Design',
      cor: '#FAE9F5'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Inovação e Gestão',
      cor: '#FFEEDF'
    },
  ])

  const [colaboradores, setColaboradores] = useState ([])

  const aoNovoColadoradorAdicionado = (colaborador) => {
    const novoColaborador = { ...colaborador, id: uuidv4() };
    setColaboradores([...colaboradores, novoColaborador]);
  }


  function deletarColaborador(colaboradorId) {
    setColaboradores(prevColaboradores => prevColaboradores.filter(colaborador => colaborador.id !== colaboradorId));
  }


function mudarCorDoTime(cor, id){
  setTimes(times.map(time => {
    if(time.id === id){
      time.cor = cor
    }
    return time;
  }));
}

function cadastrarTime(novoTime){
  setTimes([...times, {...novoTime, id: uuidv4()}])
}

function resolverFavorito (id){
  setColaboradores(colaboradores.map( colaborador => {
    if(colaborador.id === id)
      colaborador.favorito = !colaborador.favorito
      return colaborador
  }))
}

  return (
    <div className="App">
      <Banner/>
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map(time => time.nome)} 
        aoColaboradorCadastrado = {colaborador => aoNovoColadoradorAdicionado(colaborador)} 
      /> 
      {times.map(time => 
      <Time 
      id={time.id}
        mudarCor = {mudarCorDoTime}
        key={time.nome}  
        nome={time.nome} 
        cor={time.cor} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} 
        aoDeletar={deletarColaborador}
        aoFavoritar={resolverFavorito}
        />
      )}
        <Rodape/>
    </div>
  );
}

export default App;
