import React, {useState} from "react";
import { Container, Image, Button } from "react-bootstrap";
import "./CSS/detection.css";

const Cam = () => {

  const [videoShown, setvideoShown] = useState("")

  const videoShowHandler = () => {

    
    setvideoShown(<Image src="http://192.168.0.112:5050/video_feed" alt="Video" fluid />)
  };

  const videoShowHandler2 = () => {

    
    setvideoShown(<Image src="http://192.168.0.112:5050/video_feed2" alt="Video" fluid />)
  };
  const videoShowHandler3 = () => {

    
    setvideoShown(<Image src="http://192.168.0.112:5050/video_feed3" alt="Video" fluid />)
  };

  console.log("Sss",videoShown)

  return (
    <Container>
      <div className="Wrapper">
        <h1 className="title" style={{ fontWeight: 800 }}>
          Choose The Detection
        </h1>
        <div className="menu">
          <Button value="1" className="btnn-v" onClick={videoShowHandler}>
            Mask Detection
          </Button>
          <Button value="2" className="btnn-v" onClick={videoShowHandler2}>
            SOP's Detection
          </Button>
          <Button value="2" className="btnn-v" onClick={videoShowHandler3}>
            Fever Detection
          </Button>
        </div>
        {videoShown}
      </div>
    </Container>
  );
};
export default Cam;
