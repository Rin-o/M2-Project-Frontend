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
      setCost(babysitter.cost) //registered
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
          <label htmlFor="inputFirstName" className="form-label">
            First Name
            <input type="name" className="form-control" id="inputFirstName" value={firstName} onChange={event => setFirstName(event.target.value)}  />
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
            <input type="name" className="form-control" id="inputLastName" value={lastName} onChange={event => setLastName(event.target.value)}  />
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputGender" className="form-label">
            I am 
            <select id="inputGender" className="form-select" value={gender} onChange={event => setGender(event.target.value)} >
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
          </label>
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
          <label>
            Cost
            <input type='number' value={cost} onChange={event => setCost(event.target.value)}/>
          </label>
        </div>

        

        <div className="col-md-6">
          <label htmlFor="inputStreetNumber" className="form-label">
            Street Number
            <input type="text" className="form-control" id="inputStreetNumber" value={streetNumber} onChange={event => setStreetNumber(event.target.value)}  />
          </label>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputStreetName" className="form-label">
            Street Name
            <input type="text" className="form-control" id="inputStreetName" value={streetName} onChange={event => setStreetName(event.target.value)}  />
          </label>
        </div>

        <div className="col-md-6">
          <label htmlFor="inputCityName" className="form-label">
            City Name
            <input type="text" className="form-control" id="inputCityName" value={cityName} onChange={event => setCityName(event.target.value)}  />
          </label>
        </div>

          <div className="col-md-6">
          <label htmlFor="inputPostcode" className="form-label">
            Postcode
            <input type="text" className="form-control" id="inputPostcode" value={postcode} onChange={event => setPostcode(event.target.value)}  />
          </label>
          </div>

          <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Email
            <input type="email" className="form-control" id="inputEmail4" value={email} onChange={event => setEmail(event.target.value)}  />
          </label>
          </div>

          <div className="col-md-6">
          <label htmlFor="inputTelephone" className="form-label">
            Telephone
            <input className="form-control" id="inputTelephone" value={phone} onChange={event => setPhone(event.target.value)}  />
          </label>
          </div>

          <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">
            Password
            <input type="password" className="form-control" id="inputPassword4" value={password} onChange={event => setPassword(event.target.value)} />
          </label>
        </div>
          
          <div className="col-md-6">
          <label htmlFor="inputDescription" className="form-label">
            Description
            <textarea type="text" className="form-control" id="inputDescription" value={description} onChange={event => setDescription(event.target.value)} />
          </label>
          </div>

          <div className="col-md-6">
          <label htmlFor="inputPicture" className="form-label">
            Picture
            <input className="form-control" id="inputPicture" type="file" accept="image/*" value={picture} onChange={event => setPicture(event.target.value)}/>
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
