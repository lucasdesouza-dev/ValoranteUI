import MetodsService from "../../service/metodsService";

import ApiRequest from "../../service/apiService";

import CardAgente from "../../components/CardAgente";

function Agentes() {
  const dados = ApiRequest.getAgents();

  return (
    <div className="flex flex-wrap justify-center gap-4 min-h-screen">
      {dados?.map((agente: any) => {
        const grupoBackground = agente.backgroundGradientColors.length;

        return (
          <CardAgente
            key={agente.uuid}
            uuid={agente.uuid}
            img={agente.displayIcon}
            name={agente.displayName}
            funcao={agente.role.displayName}
            background={
              agente.backgroundGradientColors[
                MetodsService.numeroAleatorio(0, grupoBackground)
              ]
            }
          />
        );
      })}
    </div>
  );
}

export default Agentes;
