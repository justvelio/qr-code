import "./CodeBox.css";
import qrimg from "../../assets/image-qr-code.png";

function CodeBox() {
  return (
    <div className="whole-box">
      <div className="box">
        <img className="img" src={qrimg} alt="qr-code" />
        <p className="title">
          Improve your front-end skills by building projects
        </p>
        <p className="description">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default CodeBox;
