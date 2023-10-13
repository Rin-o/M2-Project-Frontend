import {Link} from 'react-router-dom'
import cloudImage from '../assets/Images/cloud_icon.png'
import nannyImage from '../assets/Images/full-shot-teacher-helping-girl-learn.jpg'

const HomePage = () => {
    return ( 
        <>
            <div className="container">
                <div className="textHomepage">
                <h1 style={{lineHeight: '2em'}} className="font-container">Exceptional child care and
                <br/>early learning for today's families.</h1>
                <p style={{paddingTop: '4rem', lineHeight:'2em'}}>With warm, experienced nannies, full-day schedules,
                    <br />rolling admissions and a world-class curriculum,
                    <br />IronNanny meets you where you are.</p>
                <Link to='/babysitters'>
                    <button className="btnNav">Find nannies near you that you’ll love</button>
                </Link><br/>
                <img src={cloudImage} alt="cloud icon" className="cloud"/>

                </div>
                <img src={nannyImage} alt="Image a teacher helping a child learn" className="imageRectangle"/>
            </div>

            <footer />
        </>
     );
}
 
export default HomePage;