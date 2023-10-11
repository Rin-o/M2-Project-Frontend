import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import AvailabilityPage from './AvailabilityPage';
import cloudImage from '../assets/Images/cloud_icon.png'


const BabysitterDetailsPage = () => {

    const {babysitterId} = useParams()
    const navigate = useNavigate()

    const [babysitter, setBabysitter] = useState()

    const fetchBabysitter = async () => {
        try {
        const response = await fetch(`http://localhost:5005/babysitters/${babysitterId}`)
        if (response.ok) {
            const babysitter = await response.json()
            setBabysitter(babysitter)
            console.log(babysitter)
        }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBabysitter()
    }, [])

    useEffect(() => {
        console.log(babysitter)
    }, [babysitter])

    return !babysitter ? (
    <h1>Loading ...</h1>
    ) : (
        <div className="otherContainer">
          <div className="twoClouds">
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          <img className="nannyPic" src={babysitter.picture}/>
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          </div>
          <h1>{babysitter.name.first} {babysitter.name.last}</h1>
          <h4>{babysitter.experience} years of experience</h4>
          <p>£{babysitter.cost} per hour</p>

          <div className="nannyInfo" style={{display: 'flex', alignItems:'center'}}>
            <div className="nannyInfo" style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
              <h5>Age:</h5>
              <p className="whiteBox">{babysitter.age} years-old</p>
              <h5>Telephone:</h5>
              <p className="whiteBox">{babysitter.phone}</p>
              <h5>Email:</h5>
              <p className="whiteBox">{babysitter.email}</p>
              <h5>Address:</h5>
              <p className="whiteBox">{babysitter.location.streetNumber} {babysitter.location.streetName}
              <br/ >{babysitter.location.postcode} {babysitter.location.city}</p>
            </div>
            <div  className="nannyInfo" style={{textAlign:'justify', marginLeft:'3rem'}}>
            <h3>Description:</h3>
              <p className="whiteBox">{babysitter.description}</p>
              <h3>Availability</h3>
              <AvailabilityPage />                          
            </div>
          </div>
          <button type='button' className="btnNav">Send an email</button>
          <Link to={`/adminPassword/${babysitterId}`}>
            <button type='button' className="btnNav">Update</button>
          </Link>
        </div>
    );
}
 
export default BabysitterDetailsPage;