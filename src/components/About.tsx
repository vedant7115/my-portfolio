import "./styles/About.css";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          AI & Machine Learning undergraduate at LNCT, specializing in Natural Language Processing, Large Language Models, and Deep Learning systems. I am passionate about leading AI research initiatives, building intelligent products, and deploying scalable data-driven solutions.
        </p>
        <div className="about-socials" style={{ display: 'flex', gap: '20px', fontSize: '24px', marginTop: '20px' }}>
          <a href="https://github.com/vedant7115" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/vedant-saubhri-205910288/" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaLinkedinIn />
          </a>
          <a href="https://x.com/vedant_7115?s=21" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaXTwitter />
          </a>
          <a href="https://www.instagram.com/vedant_7115?igsh=am95NWViaTBoM2Zt&utm_source=qr" target="_blank" rel="noreferrer" style={{ color: 'white' }}>
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
