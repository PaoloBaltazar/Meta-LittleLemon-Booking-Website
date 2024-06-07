import aboutImage from '../Assets/AboutImage.jpg'
import "./About.css"

const About = () => {
  return (
    <div className="about">
      <section className="about-section">
        <div className="about-text-section">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-subtitle">Chicago</h3>
          <p className="about-description">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          
        </div>
        <div>
          <img src={aboutImage} className="about-image" alt="about image"/>
        </div>
      </section>
    </div>
  )
}

export default About;

