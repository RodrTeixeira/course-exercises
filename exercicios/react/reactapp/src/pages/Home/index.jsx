
import './styles.css';

import { Card } from "../../components/Card";

function Home() {

  return (
    <div className="container">
      <h1>Lista de Presença</h1>
      <input type="text" placeholder="Digite um nome..." />
      <button type="button">Adicionar</button>

      <Card name="Renato Machado" time="09:45:12"/>
      <Card name="Antonio Lopes" time="15:25:12"/>
     
      
    </div>
    
  )
}

export default Home;
