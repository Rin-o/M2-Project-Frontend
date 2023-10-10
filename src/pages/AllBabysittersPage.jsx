import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import AddBabysitterPage from './AddBabysitterPage'

const AllBabysittersPage = () => {

    const [babysitters, setBabysitters] = useState([])

    const fetchAllBabysitters = async () => {
        try {
          const response = await fetch('http://localhost:5005/babysitters')
          if (response.ok) {
            const allBabysitters = await response.json()
            console.log(allBabysitters)
            setBabysitters(allBabysitters)
          }
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchAllBabysitters()
      }, [])

     const  addNewBabysitter = (newBabysitter) => {
      setBabysitters([newBabysitter, ...babysitters])
      }

      return ( 
        <div className="allNannyContainer">
          <div className="twoClouds">
          <img src="src/assets/Images/cloud_icon.png" alt="cloud icon" className="cloud"/>
          <h1 className="font-container">Our Nannys</h1>
          <img src="src/assets/Images/cloud_icon.png" alt="cloud icon" className="cloud"/>
          </div>
          <p>IronNanny makes finding a local, trusted nanny, easier than ever.</p>
          <ul style={{listStyle: 'none', display: 'grid', gridTemplate: 'auto / repeat(3, 1fr)',
          gap: '1rem', padding: '0 1rem',}}>
              {babysitters.map(el => (
                <li key={el.id}>
                  <Link to={`/babysitters/${el.id}`}>
                    <div className="font-container">
                    <img src={el.picture}/>
                      <h3>{el.name.first}</h3>
                      <p>{el.experience} years of experience</p>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
     );
}
 
export default AllBabysittersPage;