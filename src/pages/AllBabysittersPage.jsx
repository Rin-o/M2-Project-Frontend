import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'

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

      const handleSortByAge = () => {
        const copyBabysitters = [...babysitters];
        copyBabysitters.sort ((user1, user2) => user1.age > user2.age ? 1 : -1)
        setBabysitters(copyBabysitters);
      }

      const handleSortByExperience = () => {
        const copyBabysitters = [...babysitters];
        copyBabysitters.sort ((user1, user2) => user1.experience < user2.experience ? 1 : -1)
        setBabysitters(copyBabysitters);
      }

     /*const  addNewBabysitter = (newBabysitter) => {
      setBabysitters([newBabysitter, ...babysitters])
      }*/

      return ( 
        <div className="allNannyContainer">
          <div className="twoClouds">
            <img src="src/assets/Images/cloud_icon.png" alt="cloud icon" className="cloud"/>
            <h1 className="font-container">Our Nannys</h1>
            <img src="src/assets/Images/cloud_icon.png" alt="cloud icon" className="cloud"/>
          </div>
          <p>IronNanny makes finding a local, trusted nanny, easier than ever.</p>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type='button' class="btn btn-secondary" onClick={() => handleSortByAge()}>Sort by age</button>
          <button type='button' class="btn btn-secondary" onClick={() => handleSortByExperience()}>Sort by experience</button>
          </div>
          <ul style={{listStyle: 'none', display: 'grid', gridTemplate: 'auto / repeat(3, 1fr)',
          gap: '1rem', padding: '0 1rem',}}>
              {babysitters.map(el => (
                <li key={el.id}>
                  <Link to={`/babysitters/${el.id}`}>
                    <div className="font-container">
                    <img src={el.picture}/>
                      <h3>{el.name.first}</h3>
                      <p>{el.age} years old</p>
                      <p>{el.experience} years of experience</p>
                      <p>£{el.cost} per hour</p>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      );
}
 
export default AllBabysittersPage;