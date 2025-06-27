import React, {  useState } from 'react'
import './index.css'
import { FaHeart, FaHome, FaInfoCircle, FaShoppingBag, FaUtensils, FaBars, FaTimes  } from 'react-icons/fa';
import { FaIceCream } from 'react-icons/fa';
import { MdCake } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)
const cards = [
  {
    id: 1,
    title: "Vanilla Bliss",
    subtitle: "Soft & Elegant",
    price: "₹299 only",
    img: "/cake1.webp"
  },
  {
    id: 2,
    title: "Choco Charm",
    subtitle: "Rich & Velvety",
    price: "₹349 only",
    img: "/cake1.webp"
  },
  {
    id: 3,
    title: "Strawberry Pop",
    subtitle: "Fresh & Fruity",
    price: "₹319 only",
    img: "/cake1.webp"
  },
  {
    id: 4,
    title: "Cheese Dream",
    subtitle: "Creamy Delight",
    price: "₹379 only",
    img: "/cake1.webp"
  },
  {
    id: 5,
    title: "Macaron Magic",
    subtitle: "Color Splash",
    price: "₹259 only",
    img: "/cake1.webp"
  },
  {
    id: 6,
    title: "Desi Laddu",
    subtitle: "Festive Treat",
    price: "₹199 only",
    img: "/cake1.webp"
  }
];


const App = () => {


useGSAP(()=>{
  const tl = gsap.timeline()

   tl.from(".navbar-logo", { y: -100, opacity: 0, duration: 1, delay: 0.3 })
    .from(".navbar-links li", { y: -20, opacity: 0, stagger: 0.3 }, "-=0.5")
    
    .from(".hero-content h1", {
    x: -100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".hero-content p", {
    x: 100,
    opacity: 0,
    duration: 0.5,
  })
  .from(".hero-content button", {
    y: 100,
    opacity: 0,
    duration: 0.5,
  });
  gsap.from(".menu-icon", {y:-100,opacity:0,delay:0.3, duration: 1, })

    gsap.from(".main-grid h2", {
    scrollTrigger: {
      trigger: "h2",
      start: "top 80%",
      toggleActions: "play none none none",
      // markers: true,
    },
    y: 50,
    opacity: 0,
    duration: 0.5,
  });
     gsap.utils.toArray(".sweet-card").forEach((card, i) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: i * 0.1,
      });
    });
    gsap.from(".top", {
      scrollTrigger: {
        trigger: ".top",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".top-1", {
      scrollTrigger: {
        trigger: ".top-1",
        start: "top 90%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.from(".top-2", {
      scrollTrigger: {
        trigger: ".top-2",
        start: "top 90%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.from(".bottom", {
      scrollTrigger: {
        trigger: ".bottom",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });

    gsap.from(".bottom-1", {
      scrollTrigger: {
        trigger: ".bottom-1",
        start: "top 90%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });

    gsap.from(".bottom-2", {
      scrollTrigger: {
        trigger: ".bottom-2",
        start: "top 90%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    });
     gsap.from(".vanilla-top", {
      scrollTrigger: {
        trigger: ".vanilla-top",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
      gsap.from(".divider", {
      scrollTrigger: {
        trigger: ".divider",
        start: "top 85%",
      },
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.out",
    });
 gsap.utils.toArray(".menu-column").forEach((col, i) => {
      gsap.from(col, {
        scrollTrigger: {
          trigger: col,
          start: "top 85%",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: i * 0.2,
        ease: "back.out(1.7)",
      });
    });
     gsap.from(".delivery-image", {
      scrollTrigger: {
        trigger: ".delivery-section",
        start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
      gsap.from(".scooter", {
      scrollTrigger: {
        trigger: ".delivery-section",
        start: "top 90%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power2.out"
    });
     gsap.from(".phone-wrapper", {
      scrollTrigger: {
        trigger: ".phone-wrapper",
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.4,
      ease: "back.out(1.7)"
    });
      gsap.from(".download-btn", {
      scrollTrigger: {
        trigger: ".download-btn",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      delay: 0.6,
      ease: "back.out(1.5)"
    });
 gsap.from(".reservation-info", {
      scrollTrigger: {
        trigger: ".reservation-container",
        start: "top 90%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      stagger:0.5,
      ease: "power2.out"
    });
     gsap.from(".reservation-image", {
      scrollTrigger: {
        trigger: ".reservation-container",
        start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.2,
      ease: "power2.out"
    });
     gsap.from(".text-content", {
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
    });
       gsap.from([".title", ".description", ".new-title"], {
      scrollTrigger: {
        trigger: ".text-content",
        start: "top 80%",
      },
      opacity: 0,
      y: 30,
      stagger: 0.5,
      duration: 1,
      ease: "power2.out"
    });
       gsap.from(".email-form", {
      scrollTrigger: {
        trigger: ".email-form",
        start: "top 90%",
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.8,
      ease: "back.out(1.7)"
    });
   gsap.from(".social-icons", {
      scrollTrigger: {
        trigger: ".social-icons",
        start: "top 90%",
      },
      opacity: 0,
      y: 100,
      duration: 1,
      delay: 0.2,
      ease: "bounce.out"
    });
      gsap.from(".copyright", {
      scrollTrigger: {
        trigger: ".copyright",
        start: "top 90%",
      },
      y:100,
      opacity: 0,
      duration: 1,
    });
})




 const [isOpen, setIsOpen] = useState(false);
 



  return (
   <>
       <nav className="navbar">
      <div className="navbar-logo">Vanilla</div>

      {/* Hamburger icon for mobile */}
     

      {/* Nav links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li><FaHome /><span>Home</span></li>
        <li><FaUtensils /><span>Menu</span></li>
        <li><FaInfoCircle /><span>About</span></li>
        <li><FaShoppingBag /><span>Shop</span></li>
      </ul>
       <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>
    </nav>
      <div className="hero-section">
      <div className="hero-content">
        <h1>Its Time For</h1>
        <p>Perfect Dessert</p>
        <button className=''>Order Now</button>
      </div>
    </div>
    <div className="main-grid">
      <h2>Discover All Vanila Corner</h2>
    
     <div className="grid-wrapper">
     
      {cards.map((card) => (
        <div className="sweet-card" key={card.id}>
          {/* top-right heart */}
          <div className="card-heart">
            <FaHeart />
          </div>

          {/* round image */}
          <img src={card.img} alt={card.title} className="card-image" />

          {/* text section */}
          <div className="card-text">
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
            <p>{card.price}</p>
          </div>

          {/* bottom-right bag */}
          <div className="card-bag">
            <FaShoppingBag />
          </div>
        </div>
      ))}
    </div>
    </div>
    <div class="main">
        
            <h2>last news</h2>
            <div className="grid">
             <div class="top">
                <div class="top-1"></div>
                <div class="top-2">
                    <p>Indulge in the rich charm of our Red Velvet Vanilla Cake, where vibrant red layers meet smooth, vanilla-infused cream. Moist, tender, and luxuriously sweet, each bite melts into a perfect harmony of cocoa and vanilla flavors.</p>
                </div>
             </div>
                <div class="bottom">
                    <div class="bottom-1">
                        <p>Indulge in the rich charm of our Red Velvet Vanilla Cake, where vibrant red layers meet smooth, vanilla-infused cream. Moist, tender, and luxuriously sweet, each bite melts into a perfect harmony of cocoa and vanilla flavors.</p>
                    </div>
                    <div class="bottom-2"></div>
                </div>           
       </div>
    </div>
      <div className="vanilla-container">
      <div className="vanilla-top">
        <div className="vanilla-left">
          <h2>MADE FOR YOU</h2>
          <p className="with-love">With Love</p>
        </div>
        <div className="vanilla-right">
          <p>
            Lorem ipsum dolor sit amet consectetur. Vel mi lorem mauris at. Ornare euismod lacus magna et amet rhoncus.
            In duis nunc platea nulla sagittis turpis et. Quis ac etiam dui tellus dolor facilisi.
          </p>
        </div>
      </div>
<div className="divider">
  
      <div className="vanilla-divider"></div>
      <h2 className="menu-heading">OUR Menu</h2>
      <div className="vanilla-divider"></div>
</div>

      

      <div className="menu-container">
      <div className="menu-child glass">
      <div className="menu-column one ">
        <div className="menu-title pink">Cakes</div>
        <ul>
          <li><MdCake className="icon pink-icon" />Cheese Cake</li>
          <li><MdCake className="icon pink-icon" />Waffles & Fruits</li>
          <li><MdCake className="icon pink-icon" />Cinnamon</li>
          <li><MdCake className="icon pink-icon" />Molten Cake</li>
        </ul>
      </div>

      <div className="menu-column one ">
        <div className="menu-title pink">Ice Cream</div>
        <ul>
          <li><FaIceCream className="icon green-icon" />Ice Cream Rolls</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cups</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cone</li>
          <li><FaIceCream className="icon green-icon" />Ice Cream Cone Cupcake</li>
        </ul>
      </div>

      <div className="menu-column ">
        <div className="menu-title pink">Juice</div>
        <ul>
          <li><FaIceCream className="icon yellow-icon" />Smooth max berry</li>
          <li><FaIceCream className="icon yellow-icon" />Smooth Straw Berry</li>
          <li><FaIceCream className="icon yellow-icon" />Smooth Mango Berry</li>
          <li><FaIceCream className="icon yellow-icon" />Milkshake Ice Coffee</li>
        </ul>
      </div>
    </div>
    </div>
    </div>

        <div className="delivery-section">
      <div className="delivery-image">
        <img src="/rasturant.jpg" alt="Cake" />
      </div>

      <div className="delivery-info">
        <img src="/scooter-removebg-preview (1).png" alt="Scooter" className="scooter" />
        <h3 className="delivery-text">We Delivery<br />Any Where</h3>
        <div className="phone-wrapper">
          <img src="/phone2-removebg-preview.png" alt="Phone" className="phone" />
          <div className="phone-text">
            <h4>Now You Can Order<br />On Mobile Phone</h4>
          </div>
        </div>
        <button className="download-btn">Download Now</button>
      </div>
    </div>

<div className="reservation-container">
      <div className="reservation-info">
        <h2 className="section-title">Opening Hours &<br />Reservations</h2>
        
        <div className="reservation-numbers">
          <p className="label">Reservation Numbers :</p>
          <p className="number">+458-874-36-21</p>
          <p className="number">+458-471-56-36</p>
        </div>

        <div className="opening-time">
          <p className="label">Opening :</p>
          <p className="time">9 <span>PM</span> To 8 <span>AM</span></p>
        </div>
      </div>

      <div className="reservation-image">
        <img 
          src="/rasturant.jpg" 
          alt="Cafe" 
        />
      </div>
    </div>
 <div className="vanilla-container-2">
      <div className="overlay">
        <div className="text-content">
          <h2 className="title">Vanilla</h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Senectus tellus rutrum viverra ultrices. Elementum odio hendrerit vitae morbi auctor cursus enim. Quisque et nibh tincidunt in tellus. Ut consectetur orci euismod magnis amet lorem sit vivamus cras.
          </p>
          <h3 className="new-title">All New in <span>Vanilla</span></h3>
          <form className="email-form">
            <input type="email" placeholder="Your Email" />
          </form>
        </div>

        <div className="footer">
          <div className="follow-us">
            <p>Follow us</p>
            <div className="social-icons">
              <FaFacebookF />
              <FaXTwitter />
              <FaInstagram />
            </div>
          </div>
          <p className="copyright">© 2023 , All Rights Reserved</p>
        </div>
      </div>
    </div>
   </>
  )
}

export default App