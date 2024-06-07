import ProfilePic1 from "../Assets/TestimonialPicture1.jpg"
import ProfilePic2 from "../Assets/TestimonialPicture2.jpg"
import ProfilePic3 from "../Assets/TestimonialPicture3.jpg"
import ProfilePic4 from "../Assets/TestimonialPicture4.jpg"
import "./Testimonials.css"

const Testimonials = () => {
  return (
    <div className="testimonials-main">

      <div className="testimonials">
        <div className="testimonials-title">
          <h1 className="testimonials-title-text">Testimonials</h1>
          <div className="testimonials-title-underline"></div>
          <p className="testimonials-subtitle">Hear what our happy customers have to say</p>
        </div>

        <div className="testimonials-container">
            <div className="testimonials-card">
              <img src={ProfilePic1} alt="Profile Picture 1" className="testimonials-card-img"/>
              <h1 className="testimonials-card-name">Ethan Miller</h1>
              <div className="testimonials-card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="testimonials-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
            
            <div className="testimonials-card">
              <img src={ProfilePic2} alt="Profile Picture 1" className="testimonials-card-img"/>
              <h1 className="testimonials-card-name">Ava Thompson</h1>
              <div className="testimonials-card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p className="testimonials-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>

            <div className="testimonials-card">
              <img src={ProfilePic3} alt="Profile Picture 1" className="testimonials-card-img"/>
              <h1 className="testimonials-card-name">Mason White</h1>
              <div className="testimonials-card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
              </div>
              <p className="testimonials-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>

            <div className="testimonials-card">
              <img src={ProfilePic4} alt="Profile Picture 1" className="testimonials-card-img"/>
              <h1 className="testimonials-card-name">Lucas Johnson</h1>
              <div className="testimonials-card-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </div>
              <p className="testimonials-card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
            </div>
        </div>
      </div>

    </div>
    
  )
}

export default Testimonials