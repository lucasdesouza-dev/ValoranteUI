import { Link } from "react-router-dom";

function card({ img, name, funcao, background, uuid }: any) {
  return (
    <div className=" max-w-sm  rounded-lg border flex flex-col items-center border-gray-200 shadow-md ">
      <Link to={uuid}>
        <div style={{ background: `#${background}` }} className="rounded-lg">
          <img
            className="p-4 rounded-t-lg w-[300px] h-[300px]"
            src={img}
            alt=""
          />
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-3xl text-center font-bold tracking-tight ">
            {name}
          </h5>

          <p
            style={{ color: `#${background}` }}
            className="mb-3  text-gray-900 font-bold text-center"
          >
            {funcao}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default card;
