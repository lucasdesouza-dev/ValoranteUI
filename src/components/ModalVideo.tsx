
function ModalVideo({video}:any) {
  console.log(video)
  return (
   
      <video 
        autoPlay
        width={"100%"}
        controls
        src={video}>

      </video>
      
   
  );
}

export default ModalVideo;
