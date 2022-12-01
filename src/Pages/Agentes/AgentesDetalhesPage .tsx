import { useParams } from "react-router-dom";
import { useState } from "react";
import ApiRequest from "../../service/apiService";
import Agente from "./agente";

import MetodsService from "../../service/metodsService";
import Modal from "react-modal";
import ModalVideo from "../../components/ModalVideo";
import Audio from "../../components/Audio";

Modal.setAppElement("#root");

const AgentesDetalhesPage = () => {
  const { id } = useParams();
  const dados: Agente = ApiRequest.getDataUuid("agents", id);
  console.log(dados)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState("");

  const audioUrl = dados?.voiceLine.mediaList[0].wave;

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const  color = ` #${
    dados && dados.backgroundGradientColors[MetodsService.numeroAleatorio(0, 3)]
  }`;

  return (
    <div>
      {dados && (
        <div className="flex  max-w-[100rem]">
          <div
            className="flex flex-col justify-center items-center"
            style={{
              background: `linear-gradient(to right, ${color},#fff)`,
            }}
          >
            <img
              style={{}}
              className="p-4 min-w-[30rem]"
              src={dados.fullPortrait}
              alt={`imagem ${dados.displayName}`}
            />
            <Audio audioUrl={audioUrl} />
          </div>
          <div className="p-4 max-w-4xl">
            <h1 className="text-center text-4xl font-bold m-10">
              {dados.displayName}
            </h1>
            <h2 className="text-xl font-medium m-2"> Biografia</h2>
            <p className="indent-10">{dados.description}</p>
            <div className="m-2 mt-4">
              <div className="flex items-center ">
                <img
                  className="bg-black w-6  rounded-full"
                  src={dados.role.displayIcon}
                  alt=""
                />
                <h1 className="text-2xl font-bold m-2">
                  {dados.role.displayName}
                </h1>
              </div>
              <p className="indent-10">{dados.role.description}</p>
            </div>
            <div className="flex border p-4 text-center w-full">
              {dados.abilities.map((abilidade) => {
                abilidade.video = MetodsService.verificaAgente(
                  dados.displayName
                );
                function atribuir() {
                  setModalVideoUrl(
                    (abilidade.video as any)[abilidade.displayName]
                  );
                  openModal();
                }
                return (
                  <div
                    key={abilidade.slot}
                    className="w-60 flex flex-col items-center m-6"
                  >
                    <div
                      onClick={atribuir}
                      className="cursor-pointer bg-black w-20 m-2 "
                    >
                      <img src={abilidade.displayIcon} alt="" />
                    </div>
                    <div>
                      <h1
                        style={{ color: color }}
                        className="font-bold text-xl mb-2 "
                      >
                        {abilidade.displayName}
                      </h1>
                      <p className="text-sm">{abilidade.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <Modal
                style={{
                  overlay: {
                    position: "fixed",
                    // backgroundColor: 'rgba(255, 255, 255, 0.75)',
                  },
                  content: {
                    width: "60vw",
                    height: "67vh",
                    padding: 0,
                    top: 150,
                    left: 400,
                  },
                }}
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <button
                  style={{ background: `${color}` }}
                  className="absolute top-0 left-0 z-10
                    p-2 m-2 rounded-md text-xl font-bold text-b"
                  onClick={closeModal}
                >
                  Fechar
                </button>
                <ModalVideo video={modalVideoUrl} />
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentesDetalhesPage;
