import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {v4 as uuidv4} from 'uuid' 
import nannyImage2 from '../assets/Images/full-shot-teacher-watching-little-kids-play.jpg'

const AddBabysitterPage = ({ isUpdate, babysitter }) => {   
  const navigate = useNavigate()

  const [gender, setGender] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)
  const [streetName, setStreetName] = useState('')
  const [streetNumber, setStreetNumber] = useState('')
  const [cityName, setCityName] = useState('')
  const [postcode, setPostcode] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')
  const [picture, setPicture] = useState('')
  const [experience, setExperience] = useState(0)
  const [cost, setCost] = useState(0)
  const [day, setDay] = useState('')
  const [morning, setMorning] = useState(false)
  const [afternoon, setAfternoon] = useState(false)

  const onSubmit = async event => {
    event.preventDefault()
    const payload = { 
      name:{first: firstName, last: lastName,}, 
      gender, 
      age,
      email, 
      phone,
      password, 
      location: {streetNumber, streetName, city: cityName, postcode}, 
      experience,
      cost,
      description, 
      picture,
      availability: [{day, morning, afternoon}],
      id: uuidv4()}
      console.log(payload)

    try {
      const response = await fetch(
        `http://localhost:5005/babysitters`,
        {
        method: isUpdate ? 'PUT' : 'POST',   
        body: JSON.stringify(payload),
        headers: {
            'Content-type': 'application/json',
          },
        }
      )
      console.log(response)
      if (response.ok) {
        const currentBabysitter = await response.json()
        console.log(currentBabysitter)
        navigate(`/babysitters/${currentBabysitter.id}`)      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isUpdate && babysitter) {     
      setFirstName(babysitter.name.first)   // or firstName
      setLastName(babysitter.name.last) // or lastName
      setGender(babysitter.gender)
      setAge(babysitter.age) //or age
      setDescription(babysitter.description)
      setStreetNumber(babysitter.location.streetNumber) //streetNumber
      setStreetName(babysitter.location.streetName) //streetName
      setCityName(babysitter.location.city) //cityName
      setPostcode(babysitter.location.postcode) //postcode
      setEmail(babysitter.email)
      setPhone(babysitter.phone) //telephone
      setPassword(babysitter.password)
      setPicture(babysitter.picture) //largePic
      setExperience(babysitter.experience)
      setCost(babysitter.cost)
      setDay(babysitter.availability.day)
      setMorning(babysitter.availability.morning)
      setAfternoon(babysitter.availability.afternoon)
    }
  }, [babysitter])

  return (
    <div className="otherContainer">
        <h1>Are you a nanny?</h1>
        <p>Only a few clicks away to register...350,000 people said they would recommend this website to their friends/families.</p> 
        <p>I promise, you won't be disappointed!</p>
        <div className="container">
        <form  className="row g-3" onSubmit={onSubmit}>
        
        <div className="col-md-6">
            <input placeholder="First Name" type="name" className="form-control" id="inputFirstName" value={firstName} onChange={event => setFirstName(event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="Last Name" type="name" className="form-control" id="inputLastName" value={lastName} onChange={event => setLastName(event.target.value)}  />
        </div>

        <div className="col-md-6">
            <select id="inputGender" className="form-select" value={gender} onChange={event => setGender(event.target.value)}>
            <option value="male">I am male</option>
            <option value="female">I am female</option>
            </select>
        </div>

        <div className="col-md-6">
            <input placeholder="Email" type="text" className="form-control" id="inputEmail" value={email} onChange={event => setEmail (event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="Telephone" type="text" className="form-control" id="inputTelephone" value={phone} onChange={event => setPhone (event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="Password" type="text" className="form-control" id="inputPassword" value={password} onChange={event => setPassword(event.target.value)}  />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputAge" className="form-label">
            Age
            <input className="form-control" id="inputAge" type='number' value={age} onChange={event => setAge(event.target.value)}  />
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputExperience" className="form-label">
            Experience
            <input className="form-control" id="inputExperience" type='number' value={experience} onChange={event => setExperience(event.target.value)}/>
          </label>
        </div>

          <div className="col-md-6">
          <label htmlFor="inputCost" className="form-label">
            Hourly rate (£)
            <input className="form-control" id="inputCost" type='number' value={cost} onChange={event => setCost(event.target.value)}/>
          </label>
        </div>

        <div className="col-md-6">
            <label htmlFor="inputPicture" className="form-label">
              Profile Picture
              <input className="form-control" id="inputPicture" type="file" accept="image/*" value={picture} onChange={event => setPicture(event.target.value)}/>
          </label>
          </div>

        <div className="col-md-6">
            <input placeholder="Street Number" type="text" className="form-control" id="inputStreetNumber" value={streetNumber} onChange={event => setStreetNumber(event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="Street Name" type="text" className="form-control" id="inputStreetName" value={streetName} onChange={event => setStreetName(event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="Postcode" type="text" className="form-control" id="inputPostcode" value={postcode} onChange={event => setPostcode (event.target.value)}  />
        </div>

        <div className="col-md-6">
            <input placeholder="City Name" type="text" className="form-control" id="inputCityName" value={cityName} onChange={event => setCityName (event.target.value)}  />
        </div>

        <div className="col-md-12">
            <textarea placeholder="Description" type='text' className="form-control" id="inputDescription" value={description} onChange={event => setDescription (event.target.value)}  />
        </div>

          <div>
            <label>
              Availability
              <table>
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                  </tr>
                </thead>
                <tbody>
                  
                  <tr>
                    <td>Monday</td>
                    <td>
                        <input type="checkbox"  />
                    </td>
                  </tr>
                </tbody>
              </table>
            </label>
          </div>

          <button className="btnNav" type="submit">Create your account</button>
        </form>
        <img src={nannyImage2} alt="Image of a teacher watching little kids playing" className="imageRectangle"/>
        </div>
    </div>
    
  )
}

export default AddBabysitterPage
