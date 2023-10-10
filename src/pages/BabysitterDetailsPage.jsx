import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from 'react'


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
        <>
          <img src={babysitter.picture}/>
          <h1>{babysitter.name.first} {babysitter.name.last}</h1>
          <h4>{babysitter.experience} years of experience</h4>
          <div style={{display: 'flex', alignItems:'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'left'}}>
              <h5>Age:</h5>
              <p>{babysitter.age} years-old</p>
              <h5>Telephone:</h5>
              <p>{babysitter.phone}</p>
              <h5>Email:</h5>
              <p>{babysitter.email}</p>
              <h5>Address:</h5>
              <p>{babysitter.location.streetNumber} {babysitter.location.streetName}
              <br/ >{babysitter.location.postcode} {babysitter.location.city}</p>
            </div>
            <div style={{textAlign:'justify', marginLeft:'3rem'}}>
              <h3>Description:</h3>
              <p>{babysitter.description}</p>
            </div>
          </div>
          <button type='button'>Send an email</button>
          <Link to={`/adminPassword/${babysitterId}`}>
            <button type='button'>Update</button>
          </Link>
        </>
    );
}
 
export default BabysitterDetailsPage;