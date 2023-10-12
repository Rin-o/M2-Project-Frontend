import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const UpdatePage = () => {
    
    const {babysitterId} = useParams()
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
            `http://localhost:5005/babysitters/${babysitterId}`,
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
        const response = await fetch(`http://localhost:5005/babysitters/${babysitterId}`
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
            setPassword(babysitter.password? babysitter.password : '')
            setPicture(babysitter.picture) 
            setExperience(babysitter.experience) 
            setCost(babysitter.cost)
            setMonday(babysitter.availability[0].morning)
            setTuesday(babysitter.availability[1].morning)
            setWednesday(babysitter.availability[2].morning)
            setThursday(babysitter.availability[3].morning)
            setFriday(babysitter.availability[4].morning)
            setSaturday(babysitter.availability[5].morning)
            setSunday(babysitter.availability[6].morning)
        }
    }

    useEffect(() => {
        fetchBabysitter()
    }, [])

    const handleDelete = async () => {
      try {
        const response = await fetch(`http://localhost:5005/babysitters/${babysitterId}`, {
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

    

    return ( 
        <div>
            <form onSubmit={onSubmit} style={{ display: 'grid', gridTemplate: 'auto / 1fr' }}>
          <label>
            I am 
            <select value={gender} onChange={event => setGender(event.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            </select>
          </label>
          <label>
            First Name
            <input value={firstName} onChange={event => setFirstName(event.target.value)}/>
          </label>
          <label>
            Last Name
            <input value={lastName} onChange={event => setLastName(event.target.value)}/>
          </label>
          <label>
            Age
            <input type='number' value={age} onChange={event => setAge(event.target.value)}  />
          </label>
          <label>
            Street Number
            <input value={streetNumber} onChange={event => setStreetNumber(event.target.value)}/>
          </label>
          <label>
            Street Name
            <input value={streetName} onChange={event => setStreetName(event.target.value)}/>
          </label>
          <label>
            Postcode
            <input value={postcode} onChange={event => setPostcode(event.target.value)}/>
          </label>
          <label>
            City Name
            <input value={cityName} onChange={event => setCityName(event.target.value)}/>
          </label>
          <label>
            Email
            <input value={email} onChange={event => setEmail(event.target.value)}/>
          </label>
          <label>
            Telephone
            <input value={phone} onChange={event => setPhone(event.target.value)}  />
          </label>
          <label>
            Password
            <input value={password} onChange={event => setPassword(event.target.value)}/>
          </label>
          <label>
            Experience
            <input type='number' value={experience} onChange={event => setExperience(event.target.value)}/>
          </label>
          <label>
            Cost
            <input type='number' value={cost} onChange={event => setCost(event.target.value)}/>
          </label>
          <label>
            Description
            <textarea value={description} onChange={event => setDescription(event.target.value)}/>
          </label>
          <label>
            Picture
            <input value={picture} onChange={event => setPicture(event.target.value)}/>
          </label>

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
                        <input value={monday?.morning} type="checkbox" name='monday-morning' checked={monday?.morning} onChange={event => setMonday(event.target.value)}/>
                    </td>
                    <td>
                        <input value={monday?.afternoon} type="checkbox" name='monday-afternoon' /*checked={monday.afternoon}*/ onChange={event => setMonday(event.target.value)}/>
                    </td>
                  </tr>
                  <tr>
                    <td>Tuesday</td>
                    <td>
                        <input value={tuesday?.morning} type="checkbox" name='tuesday-morning' onChange={event => setMonday(event.target.value)}/>
                    </td>
                    <td>
                        <input value={tuesday?.afternoon} type="checkbox" name='tuesday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>Wednesday</td>
                    <td>
                        <input value={wednesday?.morning} type="checkbox" name='wednesday-morning' onChange={event => setMonday(event.target.value)} />
                    </td>
                    <td>
                        <input value={wednesday?.afternoon} type="checkbox" name='wednesday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>Thursday</td>
                    <td>
                        <input value={thursday?.morning} type="checkbox" name='thursday-morning' onChange={event => setMonday(event.target.value)} />
                    </td>
                    <td>
                        <input value={thursday?.afternoon} type="checkbox" name='thursday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr><tr>
                    <td>Friday</td>
                    <td>
                        <input value={friday?.morning} type="checkbox" name='friday-morning' onChange={event => setMonday(event.target.value)} />
                    </td>
                    <td>
                        <input value={friday?.afternoon} type="checkbox" name='friday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>Saturday</td>
                    <td>
                        <input value={saturday?.morning} type="checkbox" name='saturday-morning' onChange={event => setMonday(event.target.value)} />
                    </td>
                    <td>
                        <input value={saturday?.afternoon} type="checkbox" name='saturday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr>
                  <tr>
                    <td>Sunday</td>
                    <td>
                        <input value={sunday?.morning} type="checkbox" name='sunday-morning' onChange={event => setMonday(event.target.value)} />
                    </td>
                    <td>
                        <input value={sunday?.afternoon} type="checkbox" name='sunday-afternoon' onChange={event => setMonday(event.target.value)} />
                    </td>
                  </tr>
                </tbody>
              </table>
            </label>

          <button>Save</button>
          <button type='button' onClick={()=>{handleDelete(babysitterId)}}>Delete</button>

        </form>
        </div>
     );
}
 
export default UpdatePage;