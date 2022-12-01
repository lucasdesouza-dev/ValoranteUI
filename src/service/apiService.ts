import { useFetch } from "usehooks-ts";
import { environment } from "../environments/environment";

const URL_PRINCIPAL = environment.Url_API_PRINCIPAL;
class ApiRequest {
  static getData(urlParametro: string) {
    const { data, error } = useFetch<any>(
      `${URL_PRINCIPAL}/${urlParametro}?language=pt-BR&isPlayableCharacter=true`
    );
    const dados = data?.data;
    return dados;
  }
  static getDataUuid(urlParametro: string, id?: string) {
    const { data, error } = useFetch<any>(
      `${URL_PRINCIPAL}/${urlParametro}/${id}?language=pt-BR&isPlayableCharacter=true`
    );
    const dados = data?.data;
    return dados;
  }
  static getAgents() {
    const dados = this.getData("agents");
    const agentes = dados;
    return agentes;
  }

  static getArmas() {
    const dados = this.getData("weapons");
    const armas = dados;
    return armas;
  }
static getMapas() {
    const dados = this.getData("maps");
    const armas = dados;
    return armas;
  }

}
export default ApiRequest;
