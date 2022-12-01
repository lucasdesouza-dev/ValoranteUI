import { useParams } from "react-router-dom";
import ApiRequest from "../../service/apiService";
import { Cores } from '../../service/cores';
import MetodsService from '../../service/metodsService';

const AgentesDetalhesPage = () => {
  const { id } = useParams();

  const dados = ApiRequest.getDataUuid("weapons", id);
  
  const color = Cores[MetodsService.numeroAleatorio(0, Cores.length)]
  console.log(color)
  return (
    <div>
      {dados && (
        <div className="m-0 text-center flex  items-center  max-w-[100rem]">
          
          <div className=' flex flex-col justify-center items-center  h-[70vh]'
          style={{
              background: `linear-gradient(to right, #${color},#fff)`,
            }}>
            <img
              
              className=" p-4 min-w-[40rem]"
              src={dados.displayIcon}
              alt={`imagem ${dados.displayName}`}
            />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='mb-16'>
              <h1 className="mb-0 text-4xl font-bold m-10">
                {dados.displayName}
              </h1>
              <h2 className="text-xl font-medium m-2 ">
                {dados.shopData.categoryText}
              </h2>
            </div>
            
            <div>
              <table className='w-[50vw] border border-black'>
                <tr>
                  <th>Cadência de Tiro</th>
                  <td className=' border border-black'>
                    {dados.weaponStats.fireRate}/segundo
                  </td>
                </tr >
                <tr className=' border border-black'>
                  <th>Tamanho do Magazine</th>
                  <td className=' border border-black'>
                    {dados.weaponStats.magazineSize} munições
                  </td>
                </tr>
                <tr>
                  <th>Tempo de Recarga</th>
                  <td className=' border border-black'>
                    {dados.weaponStats.reloadTimeSeconds} segundos
                  </td>
                </tr>
                <tr className=' border border-black'>
                  <th>Custo na Loja</th>
                  <td className=' border border-black'>
                    {dados.shopData.cost} 
                  </td>
                </tr>
              </table>

              <div >
                <h1 className="text-xl font-medium m-2 ">Intervalo de Dano</h1>
                  
                    {dados.weaponStats.damageRanges.map((interDano:any)=>{

                      return(
                        <table className='w-[50vw] border border-black mb-2'>
                          <caption className='border border-b-0 border-black font-bold'>
                            {interDano.rangeStartMeters} até {interDano.rangeEndMeters} metros
                            </caption>
                          
                          <tr >
                            
                            <td className=' w-2/4 border-r border-black'>
                              {interDano.headDamage && "Cabeça" }</td>
                            <td>{interDano.bodyDamage && "Corpo"}</td>
                            </tr>
                            
                          <tr >
                            <td className='border-r border-black'>{interDano.headDamage}</td>
                            <td>{interDano.bodyDamage}</td>
                            </tr>
                        </table>  
                      )
                    })}

              </div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
};

export default AgentesDetalhesPage;