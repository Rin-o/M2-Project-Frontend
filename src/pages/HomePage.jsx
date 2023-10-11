import cloudImage from '../assets/Images/cloud_icon.png'
import nannyImage from '../assets/Images/full-shot-teacher-helping-girl-learn.jpg'

const HomePage = () => {
    return ( 
        <>
            <div className="container">
                <div className="textHomepage">
                <h1 className="font-container">Exceptional child care and early learning for today's families.</h1>
                <p>With warm, experienced nannies, full-day schedules, rolling admissions and a world-class curriculum, IronNanny meets you where you are.</p>
                <img src={cloudImage} alt="cloud icon" className="cloud"/>
                </div>
                <img src={nannyImage} alt="Image a teacher helping a child learn" className="imageRectangle"/>
            </div>

            <footer></footer>
        </>
     );
}
 
export default HomePage;