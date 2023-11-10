import { Link } from "react-router-dom"
import {useState, useEffect} from 'react'
import cloudImage from '../assets/Images/cloud_icon.png'


const AllBabysittersPage = () => {

    const [babysitters, setBabysitters] = useState([])

    const fetchAllBabysitters = async () => {
        try {
          const response = await fetch('http://localhost:5005/babysitters',
          {
            method: 'GET',
            body: JSON.stringify(),
            headers: {
              'Content-type': 'application/json',
            },
          })
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

      const handleSortByCost = () => {
        const copyBabysitters = [...babysitters];
        copyBabysitters.sort ((user1, user2) => user1.cost > user2.cost ? 1 : -1)
        setBabysitters(copyBabysitters);
      }

     /*const  addNewBabysitter = (newBabysitter) => {
      setBabysitters([newBabysitter, ...babysitters])
      }*/

      return ( 
        <div className="otherContainer">
          <div className="twoClouds">
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          <h1 className="fontColor" style={{textAlign: 'center'}}>Our Nannys</h1>
          <img src={cloudImage} alt="cloud icon" className="cloud"/>
          </div>
          <p>IronNanny makes finding a local, trusted nanny, easier than ever.</p>
          <div className="btn-group" role="group" aria-label="Basic example">
          <button type='button' className="btnNav" onClick={() => handleSortByAge()}>Sort by age</button>
          <button type='button' className="btnNav" onClick={() => handleSortByExperience()}>Sort by experience</button>
          <button type='button' className="btnNav" onClick={() => handleSortByCost()}>Sort by hourly rate</button>
          </div>
          <ul className="container" style={{listStyle: 'none', display: 'grid', gridTemplate: 'auto / repeat(3, 1fr)',
          gap: '1rem', padding: '0 1rem',}}>
              {babysitters.map(el => (
                <li key={el.id} style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  boxShadow: '1px 2px 7px 2px lightGrey',
                }}>
                  <Link style={{textDecoration: 'none'}} to={`/babysitters/${el.id}`}>
                    <div className="font-container">
                    <img className="nannyPic" src={el.picture}/>
                    <div >
                      <h3>{el.name.first}</h3>
                      <p>{el.age} years old</p>
                      <p>{el.experience} years of experience</p>
                      <p className="whiteBox">£{el.cost} per hour</p>
                    </div>
                  </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      );
}
 
export default AllBabysittersPage;