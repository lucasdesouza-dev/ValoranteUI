import { Link } from "react-router-dom";

function CardArmas({ img, name, categoria, background, uuid }: any) {
  return (
    <Link to={uuid}>
      <div className="  w-[500px] h-[300px] rounded-lg border flex flex-col items-center border-gray-200 shadow-md ">
        <div
          className="w-full h-[200px] rounded-lg"
          style={{ background: `#${background}` }}
        >
          <div className="rounded-lg ">
            <img
              style={{ width: `` }}
              className=" object-scale-down w-[500px] h-[148px] p-4 rounded-t-lg "
              src={img}
              alt=""
            />
          </div>
        </div>
        <div className="p-5">
          <h5 className="mb-2 text-3xl text-center font-bold tracking-tight ">
            {name}
          </h5>

          <p
            style={{ color: `#${background}` }}
            className="mb-3  text-gray-900 font-bold text-center"
          >
            {categoria}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CardArmas;
