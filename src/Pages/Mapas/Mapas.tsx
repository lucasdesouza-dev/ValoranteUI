import CardMapas from "../../components/CardMapas";
import ApiRequest from "../../service/apiService";
import MetodsService from "../../service/metodsService";

const Armas = () => {
  const dados = ApiRequest.getMapas();

  const DadosAtualizado =
    dados &&
    dados.filter(
      (mapa: { displayName: string }) => mapa.displayName != "The Range"
    );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 min-h-screen">
        {DadosAtualizado?.map((mapa: any) => {
          return (
            <CardMapas
              key={mapa.uuid}
              uuid={mapa.uuid}
              img={mapa.displayIcon}
              name={mapa.displayName}
              background={MetodsService.Cor()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Armas;
