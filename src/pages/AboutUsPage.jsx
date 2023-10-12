import alicePic from "../assets/Images/Alice.jpg"
import rinoPic from "../assets/Images/Rino.jpg"
import cloudImage from '../assets/Images/cloud_icon.png'


const AboutUsPage = () => {
    return ( 
    <div>
      <div className="founderInfo">
      <div className="twoClouds">
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          <h1 className="fontColor">About Us</h1>
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          </div>
        <p>Welcome to our website!
            <br />We are a mom duo of aspiring developers based in France who are enthusiastic about creating innovative web solutions with a seamless user experience.
        </p>
        <p>With a shared passion for design, coding, and technology, we have joined forces to bring our skills and creativity together.</p>
        <p>Want to achive digital transformation? <a href="">Contact us!</a></p>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/alice-pennec-4812a851/" target="_blank"><img className="foundersPic" src={alicePic} alt="IronNanny founder Alice"/></a>
        <a href="https://www.linkedin.com/in/rino-ito/" target="_blank"><img className="foundersPic" src={rinoPic} alt="IronNanny founder Rino"/></a>
      </div>
    </div>
     );
}
 
export default AboutUsPage;