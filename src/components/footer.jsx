import {Link} from 'react-router-dom'
import instagramIcon from '../assets/Images/Instagram_icon.png'
import facebookIcon from '../assets/Images/Facebook_icon.png'
import youtubeIcon from '../assets/Images/Youtube_icon.png'
import twitterIcon from '../assets/Images/Twitter_icon.png'
import linkedinIcon from '../assets/Images/Linkedin_icon.png'

function Footer() {
    return (
        <>
        <footer>
      <div className="socialMedia">
            <img src={instagramIcon} alt="Instagram icon"/>
            <img src={facebookIcon} alt="Facebook icon"/>
            <img src={youtubeIcon} alt="Youtube icon"/>
            <img src={twitterIcon} alt="Twitter icon"/>
            <img src={linkedinIcon} alt="Linkedin icon"/>
        </div>
      <p>©2023 All Right Reserved by Alice and Rino</p>
      </footer>
        
        </>
    )
}

export default Footer