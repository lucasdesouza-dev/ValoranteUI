import { useParams } from "react-router-dom";
import ApiRequest from "../../service/apiService";
import MetodsService from '../../service/metodsService';

const AgentesDetalhesPage = () => {
  const { id } = useParams();

  const dados = ApiRequest.getDataUuid("maps", id);
  
  const color = MetodsService.Cor()
  return (
    <div>
      {dados && (
          
          <div className='p-4 bg-cover flex  justify-center items-center w-full  h-[90vh]'
          style={{
            backgroundImage: `url(${dados.splash})`
          }}>
            <div>
              <img
                className="m-2 mr-0 p-8 w-2/4 min-w-[800px]"
                src={dados.displayIcon}
                alt={`imagem ${dados.displayName}`}
              />
            </div>
            <div className='p-6  w-2/4 mim-w-[200px] text-center border border-black  rounded-md '
                style={{
              background: `#${color}`,
            }}   >
              <h1 className=' text-4xl font-bold m-4'>{dados.displayName}</h1>
              <p className='text-xl'>Cordenadas: {dados.coordinates}</p>
              <p className='text-xl'>{MetodsService.verificaMapa(dados.displayName)}</p>

            </div>
          
        </div>
      
        
        
        
        


          

        
      )}
    </div>
  );
};

export default AgentesDetalhesPage;