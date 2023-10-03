import CardArmas from "../../components/CardArmas";
import ApiRequest from "../../service/apiService";

const Armas = () => {
  const dados = ApiRequest.getArmas();
  const backgroundCategoria = {
    Heavy: "163555ff",
    Rifle: "b1414cff",
    Shotgun: "18344cff",
    Sidearm: "feac45ff",
    Sniper: "7b4d21ff",
    Smg: "4afaffff",
    Melee: "4da6e1ff",
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-4 min-h-screen">
        {dados?.map((arma: any) => {
          const categoria = arma.category.slice(21);

          const verificaBackground = () => {
            const background =
              (categoria == "Heavy" && backgroundCategoria.Heavy) ||
              (categoria == "Rifle" && backgroundCategoria.Rifle) ||
              (categoria == "Shotgun" && backgroundCategoria.Shotgun) ||
              (categoria == "Sidearm" && backgroundCategoria.Sidearm) ||
              (categoria == "Sniper" && backgroundCategoria.Sniper) ||
              (categoria == "SMG" && backgroundCategoria.Smg) ||
              (categoria == "Melee" && backgroundCategoria.Melee);
            return background;
          };

          return (
            <CardArmas
              key={arma.uuid}
              uuid={arma.uuid}
              img={arma.displayIcon}
              name={arma.displayName}
              categoria={categoria}
              background={verificaBackground()}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Armas;
