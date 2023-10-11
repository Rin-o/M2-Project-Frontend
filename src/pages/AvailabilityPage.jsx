import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WeeklyAvailability = () => {

    const {babysitterId} = useParams()
    const [days, setDays] = useState([]);

    const fetchAllDays = async () => {
        try {
          const response = await fetch(`http://localhost:5005/babysitters/${babysitterId}`)
          if (response.ok) {
            const allDays = await response.json()
            console.log(allDays)
            setDays(allDays.availability)
          }
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchAllDays()
      }, [])

    return ( 
        <div className="tbl-header">
            <table>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                </tr>
                </thead>

                <tbody class="tbl-content">
                {days.map((day) => (
                    <tr key={day.day}>
                    <td>{day.day}</td>
                    <td>{day.morning ? '✅' : ''}</td>
                    <td>{day.afternoon ? '✅' : ''}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
 
export default WeeklyAvailability;