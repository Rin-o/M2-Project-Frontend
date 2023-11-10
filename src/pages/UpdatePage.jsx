import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const UpdatePage = () => {

  const { babysitterId } = useParams()
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
    morning: true,
    afternoon: false
  })
  const [tuesday, setTuesday] = useState({
    morning: true,
    afternoon: false
  })
  const [wednesday, setWednesday] = useState({
    morning: true,
    afternoon: false
  })
  const [thursday, setThursday] = useState({
    morning: true,
    afternoon: false
  })
  const [friday, setFriday] = useState({
    morning: true,
    afternoon: false
  })
  const [saturday, setSaturday] = useState({
    morning: true,
    afternoon: false
  })
  const [sunday, setSunday] = useState({
    morning: true,
    afternoon: false
  })

  const onSubmit = async event => {
    event.preventDefault()
    const payload = {
      name: { first: firstName, last: lastName, },
      gender,
      age,
      email,
      phone,
      password,
      location: { streetNumber, streetName, city: cityName, postcode },
      experience,
      cost,
      description,
      picture,
      availability: [{ day: 'monday', morning: monday.morning, afternoon: monday.afternoon },
      { day: 'tuesday', morning: tuesday.morning, afternoon: tuesday.afternoon },
      { day: 'wednesday', morning: wednesday.morning, afternoon: wednesday.afternoon },
      { day: 'thursday', morning: thursday.morning, afternoon: thursday.afternoon },
      { day: 'friday', morning: friday.morning, afternoon: friday.afternoon },
      { day: 'saturday', morning: saturday.morning, afternoon: saturday.afternoon },
      { day: 'sunday', morning: sunday.morning, afternoon: sunday.afternoon }],
      id: uuidv4()
    }
    console.log(payload)

    try {
      const response = await fetch(
        `https://localhost:5005/babysitters/${babysitterId}`,
        {
          method: 'PUT',
          body: JSON.stringify(payload),
          headers: {
            'Content-type': 'application/json',
          },
        }
      )

      if (response.ok) {
        const currentBabysitter = await response.json()
        console.log(currentBabysitter)
        navigate(`/babysitters/${currentBabysitter.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchBabysitter = async () => {
    const response = await fetch(`https://localhost:5005/babysitters/${babysitterId}`
    )
    if (response.ok) {
      const babysitter = await response.json()

      setFirstName(babysitter.name.first)
      setLastName(babysitter.name.last)
      setGender(babysitter.gender)
      setAge(babysitter.age)
      setDescription(babysitter.description)
      setStreetNumber(babysitter.location.streetNumber)
      setStreetName(babysitter.location.streetName)
      setCityName(babysitter.location.city)
      setPostcode(babysitter.location.postcode)
      setEmail(babysitter.email)
      setPhone(babysitter.phone)
      setPassword(babysitter.password ? babysitter.password : '')
      setPicture(babysitter.picture)
      setExperience(babysitter.experience)
      setCost(babysitter.cost)
      setMonday({ ...monday, ['morning']: babysitter.availability[0].morning, ['afternoon']: babysitter.availability[0].afternoon })
      setTuesday({ ...tuesday, ['morning']: babysitter.availability[1].morning, ['afternoon']: babysitter.availability[1].afternoon })
      setWednesday({ ...wednesday, ['morning']: babysitter.availability[2].morning, ['afternoon']: babysitter.availability[2].afternoon })
      setThursday({ ...thursday, ['morning']: babysitter.availability[3].morning, ['afternoon']: babysitter.availability[3].afternoon })
      setFriday({ ...friday, ['morning']: babysitter.availability[4].morning, ['afternoon']: babysitter.availability[4].afternoon })
      setSaturday({ ...saturday, ['morning']: babysitter.availability[5].morning, ['afternoon']: babysitter.availability[5].afternoon })
      setSunday({ ...sunday, ['morning']: babysitter.availability[6].morning, ['afternoon']: babysitter.availability[6].afternoon })
    }
  }

  useEffect(() => {
    fetchBabysitter()
  }, [])

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://localhost:5005/babysitters/${babysitterId}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        const parsed = await response.json()
        console.log(parsed)
        navigate('/babysitters')
      }
    } catch (error) {
      console.log(error)
    }
  }

  console.log(monday)

  return (
    <div>
      <form onSubmit={onSubmit}>

      <div className="formAddNew">
          <div className="row g-3">

        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
            </label>
            <input type="text" className="form-control" id="inputFirstName" value={firstName} onChange={event => setFirstName(event.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
            </label>
            <input type="text" className="form-control" id="inputLastName" value={lastName} onChange={event => setLastName(event.target.value)} />
          
        </div>

        <div className="col-md-6">
          <label className="form-label">
            I am
            </label>
            <select type="gender" className="form-control" value={gender} onChange={event => setGender(event.target.value)}>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          
        </div>

        <div className="col-md-6">
          <label className="form-label">
            Email
            </label>
            <input type="text" className="form-control" value={email} onChange={event => setEmail(event.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPassword" className="form-label">
            Password
            </label>
            <input type="text" className="form-control" id="inputPassword" value={password} onChange={event => setPassword(event.target.value)} />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputTelephone" className="form-label">
            Telephone
            </label>
            <input type="text" className="form-control" id="inputTelephone" value={phone} onChange={event => setPhone(event.target.value)} />
          
        </div>


        <div className="col-md-6">
          <label htmlFor="inputAge" className="form-label">
            Age
            </label>
            <input type="number" className="form-control" id="inputAge" value={age} onChange={event => setAge(event.target.value)} />
          
        </div>

        <div className="col-md-6">
          <label htmlFor="inputExperience" className="form-label">
            Experience
            </label>
            <input type="number" className="form-control" id="inputExperience" value={experience} onChange={event => setExperience(event.target.value)} />

        </div>


        <div className="col-md-6">
          <label htmlFor="inputCost" className="form-label">
            Hourly rate
            </label>
            <input type='number' className="form-control" id="inputCost" value={cost} onChange={event => setCost(event.target.value)} />
          
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPicture" className="form-label">
            Profile Picture
            </label>
            <input className="form-control" id="inputPicture" value={picture} onChange={event => setPicture(event.target.value)} />
         
        </div>

        <div className="col-md-6">
          <label htmlFor="inputStreetNumber" className="form-label">
            Street Number
            </label>
            <input type="text" className="form-control" id="inputStreetNumber" value={streetNumber} onChange={event => setStreetNumber(event.target.value)} />
        
        </div>


        <div className="col-md-6">
          <label htmlFor="inputStreetName" className="form-label">
            Street Name
            </label>
            <input type="text" className="form-control" id="inputStreetName" value={streetName} onChange={event => setStreetName(event.target.value)} />
         
        </div>

        <div className="col-md-6">
          <label htmlFor="inputPostcode" className="form-label">
            Postcode
            </label>
            <input type="text" className="form-control" id="inputPostcode" value={postcode} onChange={event => setPostcode(event.target.value)} />
          
        </div>


        <div className="col-md-6">
          <label htmlFor="inputCityName" className="form-label">
            City
            </label>
            <input type="text" className="form-control" id="inputCity" value={cityName} onChange={event => setCityName(event.target.value)} />
          
        </div>


        <div className="col-12">
          <label htmlFor="inputDescription" className="form-label">
            Description
          </label>
         <textarea type="text" className="form-control" id="inputDescription" value={description} onChange={event => setDescription(event.target.value)} />        
       </div>

        </div>

      <div className="tbl-header2">
        <label>
        <h3 className="fontColor">Availability</h3>
          <table>
            <thead>
            <tr className="border-top">
                <th>Day</th>
                <th>Morning</th>
                <th>Afternoon</th>
              </tr>
            </thead>
            <tbody className="tbl-content">
                  <tr className="border-top">
                <td>Monday</td>
                <td>
                  <input type="checkbox" name='monday-morning' checked={monday?.morning} onChange={() => setMonday({ ...monday, ['morning']: !monday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='monday-afternoon' checked={monday.afternoon} onChange={() => setMonday({ ...monday, ['afternoon']: !monday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Tuesday</td>
                <td>
                  <input type="checkbox" name='tuesday-morning' checked={tuesday?.morning} onChange={event => setTuesday({ ...tuesday, ['morning']: !tuesday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='tuesday-afternoon' checked={tuesday.afternoon} onChange={event => setTuesday({ ...tuesday, ['afternoon']: !tuesday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Wednesday</td>
                <td>
                  <input type="checkbox" name='wednesday-morning' checked={wednesday?.morning} onChange={event => setWednesday({ ...wednesday, ['morning']: !wednesday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='wednesday-afternoon' checked={wednesday.afternoon} onChange={event => setWednesday({ ...wednesday, ['afternoon']: !wednesday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Thursday</td>
                <td>
                  <input type="checkbox" name='thursday-morning' checked={thursday?.morning} onChange={event => setThursday({ ...thursday, ['morning']: !thursday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='thursday-afternoon' checked={thursday.afternoon} onChange={event => setThursday({ ...thursday, ['afternoon']: !thursday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Friday</td>
                <td>
                  <input type="checkbox" name='friday-morning' checked={friday?.morning} onChange={event => setFriday({ ...friday, ['morning']: !friday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='friday-afternoon' checked={friday.afternoon} onChange={event => setFriday({ ...friday, ['afternoon']: !friday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Saturday</td>
                <td>
                  <input type="checkbox" name='saturday-morning' checked={saturday?.morning} onChange={event => setSaturday({ ...saturday, ['morning']: !saturday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='saturday-afternoon' checked={saturday.afternoon} onChange={event => setSaturday({ ...saturday, ['afternoon']: !saturday.afternoon })} />
                </td>
              </tr>
              <tr className="border-top">
                <td>Sunday</td>
                <td>
                  <input type="checkbox" name='sunday-morning' checked={sunday?.morning} onChange={event => setSunday({ ...sunday, ['morning']: !sunday.morning })} />
                </td>
                <td>
                  <input type="checkbox" name='sunday-afternoon' checked={sunday.afternoon} onChange={event => setSunday({ ...sunday, ['afternoon']: !sunday.afternoon })} />
                </td>
              </tr>
            </tbody>
          </table>
        </label>
      </div>
 
    </div>

        <button className="btnNav">Save</button>
        <button className="btnNav" type='button' onClick={() => { handleDelete(babysitterId) }}>Delete</button>

      </form>
    </div>
  );
}

export default UpdatePage;