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
  const [monday, setMonday] = useState({
    day: '',
    morning: true,
    afternoon: false})
  const [tuesday, setTuesday] = useState({
    morning: true,
    afternoon: false})
  const [wednesday, setWednesday] = useState({
    morning: true,
    afternoon: false})
  const [thursday, setThursday] = useState({
    morning: true,
    afternoon: false})
  const [friday, setFriday] = useState({
    morning: true,
    afternoon: false})
  const [saturday, setSaturday] = useState({
    morning: true,
    afternoon: false})
  const [sunday, setSunday] = useState({
    morning: true,
    afternoon: false})

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
      availability: [{day:'monday', morning: monday.morning, afternoon: monday.afternoon},
        {day: 'tuesday', morning: tuesday.morning, afternoon: tuesday.afternoon},
        {day: 'wednesday', morning: wednesday.morning, afternoon: wednesday.afternoon},
        {day: 'thursday', morning: thursday.morning, afternoon: thursday.afternoon},
        {day: 'friday', morning: friday.morning, afternoon: friday.afternoon},
        {day: 'saturday', morning: saturday.morning, afternoon: saturday.afternoon},
        {day: 'sunday', morning: sunday.morning, afternoon: sunday.afternoon}],
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

  const handleChange = (e) => {
    const inputName = e.target.name
    console.log(e.target.checked)
    if (inputName === 'monday-morning') {
    setMonday({...monday, ['morning']: !monday.morning})
    } if (inputName === 'tuesday-morning') {
      setTuesday({...tuesday, ['morning']: !tuesday.morning})
    } if (inputName === 'wednesday-morning') {
      setWednesday({...wednesday, ['morning']: !wednesday.morning})
    } if (inputName === 'thursday-morning') {
      setThursday({...thursday, ['morning']: !thursday.morning})
    } if (inputName === 'friday-morning') {
      setFriday({...friday, ['morning']: !friday.morning})
    } if (inputName === 'saturday-morning') {
      setSaturday({...saturday, ['morning']: !saturday.morning})
    } if (inputName === 'sunday-morning') {
      setSunday({...sunday, ['morning']: !sunday.morning})
    } else if (inputName === 'monday-afternoon') {
      setMonday({...monday, ['afternoon']: !monday.afternoon})
    } else if (inputName === 'tuesday-afternoon') {
      setTuesday({...tuesday, ['afternoon']: !tuesday.afternoon})
    } else if (inputName === 'wednesday-afternoon') {
      setWednesday({...wednesday, ['afternoon']: !wednesday.afternoon})
    } else if (inputName === 'thursday-afternoon') {
      setThursday({...thursday, ['afternoon']: !thursday.afternoon})
    } else if (inputName === 'friday-afternoon') {
      setFriday({...friday, ['afternoon']: !friday.afternoon})
    } else if (inputName === 'saturday-afternoon') {
      setSaturday({...saturday, ['afternoon']: !saturday.afternoon})
    } else if (inputName === 'sunday-afternoon') {
      setSunday({...sunday, ['afternoon']: !sunday.afternoon})
    }


  }

 /* useEffect(() => {
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
      setMonday(babysitter.availability.monday)
      setTuesday(babysitter.availability.tuesday)
      setWednesday(babysitter.availability.wednesday)
      setThursday(babysitter.availability.thursday)
      setFriday(babysitter.availability.friday)
      setSaturday(babysitter.availability.saturday)
      setSunday(babysitter.availability.Sunday)
    }
  }, [babysitter])*/

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
                        <input type="checkbox" name='monday-morning' checked={monday.morning} onChange={handleChange}/>
                    </td>
                    <td>
                        <input type="checkbox" name='monday-afternoon' checked={monday.afternoon} onChange={handleChange}/>
                    </td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>
                        <input type="checkbox" name='tuesday-morning' checked={tuesday.morning} onChange={handleChange}/>
                    </td>
                    <td>
                        <input type="checkbox" name='tuesday-afternoon' checked={tuesday.afternoon} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>
                        <input type="checkbox" name='wednesday-morning' checked={wednesday.morning} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="checkbox" name='wednesday-afternoon' checked={wednesday.afternoon} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>
                        <input type="checkbox" name='thursday-morning' checked={thursday.morning} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="checkbox" name='thursday-afternoon' checked={thursday.afternoon} onChange={handleChange} />
                    </td>
                  </tr><tr>
                    <td>Friday</td>
                    <td>
                        <input type="checkbox" name='friday-morning' checked={friday.morning} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="checkbox" name='friday-afternoon' checked={friday.afternoon} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>
                        <input type="checkbox" name='saturday-morning' checked={saturday.morning} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="checkbox" name='saturday-afternoon' checked={saturday.afternoon} onChange={handleChange} />
                    </td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>
                        <input type="checkbox" name='sunday-morning' checked={sunday.morning} onChange={handleChange} />
                    </td>
                    <td>
                        <input type="checkbox" name='sunday-afternoon' checked={sunday.afternoon} onChange={handleChange} />
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
