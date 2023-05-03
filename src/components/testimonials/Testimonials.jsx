import React from 'react'
import './testimonials.css'
import JEAN from "../../assets/jean.jpg"
import ENRIQUE from "../../assets/enrique.jpeg"
import CAMILO from "../../assets/camilo.jpeg"
import MATEO from "../../assets/mateo.jpg"
import CUBI from "../../assets/cubi.jpeg"
import LUIS from "../../assets/luis.jpg"

import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import "./styles.css";

// import required modules
import { Pagination} from "swiper";

const data=[
  {
    avatar:JEAN,
    name:'Jean Carlo Jimenez',
    review: '(+57 3113973783) Machine Learning Engineer at Mercado Libre: "I had the pleasure of studying and working alongside Juan in our research with machine learning for radiology. We collaborated as co-authors on an international paper focused on dose prediction. Throughout our time together, I was consistently impressed by Juan breadth of knowledge, creative thinking, and genuine passion for the field. I highly recommend him for any future endeavors."'
  },
  {
    avatar:ENRIQUE,
    name:'Enrique Rodriguez',
    review: '(+57 3153435969) CEO at Cultivos Bellavista sas: "Juan Developed this wonderful tool, now we can view the information we need through our smartphones with Open source hardware technologies. When he was working with us, there was no doubt he showed experience and more important, dedication to a purpose"'
  },
  {
    avatar:CAMILO,
    name:'Camilo Uribe',
    review: '(+57 3044062477) Data engineer specialist at Tachyus Corp: I met Juan when we were in a class of a physics subject at our university. When we started to know each other, we become friends really quickly. I think we have a lot in common and like the same things.  I can describe him as an excellent human being with moral solid values. He is one in a thousand, for his particular enthusiasm in learning and describing the world. He used one phrase always: In this vast universe, we are a breath, so lets make it count, which always motivated me to be better and think that it can be my last day on earth.'
  },
  {
    avatar:MATEO,
    name:'Mateo Castellanos',
    review: '(+57 3193086213) Cloud Architect at Globant: Juan definitely was one of the most outstandings partners that I had in the career, I recommend him as a profesional and as a person.'
  },
  {
    avatar:CUBI,
    name:'Camilo Cubillos',
    review: '(+57 3214391434) Electronic Engineer at ACI GROUP: In the projects in which I have worked with Juan, I have witnessed the commitment he has in each challenge that is presented to him in the different stages of the project, he has a great learning capacity, he is a great support in front-end programming issues. He has been a great co-worker, he is a very empathetic person and with great ability when it comes to teaching.'
  },
  {
    avatar:LUIS,
    name:'Gonzalo Vargas PhD',
    review: '(+57 3014204718) Assistant professor of Physics, Universidad Nacional: I know him well as an engineering physics student and because I was his academic tutor during his internship in Cultivos Bellavista, an agriculture company in order to develop an electronic device. In that job and during his studies, he has shown self-discipline, confidence and leadership, also he has had experience in digital electronics, IoT and telecommunication technologies. I consider him a very creative, outstanding and dedicated student; he is honest, responsible and respectful.'
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper pagination={{clickable:true}} modules={[Pagination]} spaceBetween={40} slidesPerView={1} className='container testimonials__container'>
        {
          data.map(({avatar,name,review},index)=> {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client_review'>
                  {review}
                </small>
             </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
