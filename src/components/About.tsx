import "./styles/About.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-content">
        <div className="about-text">
          <h3 className="title">About Me</h3>
          <p className="para">
            AI & Machine Learning undergraduate at LNCT, specializing in Natural Language Processing, Large Language Models, and Deep Learning systems. I am passionate about leading AI research initiatives, building intelligent products, and deploying scalable data-driven solutions.
          </p>
          <div className="about-socials">
            <a href="https://github.com/vedant7115" target="_blank" rel="noreferrer" className="social-link">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/vedant-saubhri-205910288/" target="_blank" rel="noreferrer" className="social-link">
              <FaLinkedinIn />
            </a>
            <a href="https://x.com/vedant_7115?s=21" target="_blank" rel="noreferrer" className="social-link">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/vedant_7115?igsh=am95NWViaTBoM2Zt&utm_source=qr" target="_blank" rel="noreferrer" className="social-link">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="about-image-container">
          <div className="image-wrapper">
            <img src="/images/profile photo.jpeg" alt="Vedant Saubhri Profile" className="profile-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
