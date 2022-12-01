import { Cores } from './cores';
import {Videos} from "./abilidadesVideos"
import { DescricaoMapas } from './descricaoMapas';
class MetodsService {
  static numeroAleatorio = (min: number, max: number) => {
    const numero = Math.floor(Math.random() * (max - min));
    return numero;
  };

 static verificaAgente=(agentName: string)=>{
const abilidadeVideos = (Videos as any)[agentName]

    return abilidadeVideos
  }

  static verificaMapa=(MapaName: string)=>{
   const descricao = (DescricaoMapas as any)[MapaName]

    return descricao
  }

  static  Cor=()=>{
    
  const  color = Cores[this.numeroAleatorio(0,Cores.length)];
    return color
  }
}
export default MetodsService;
