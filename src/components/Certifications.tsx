import Marquee from "react-fast-marquee";
import "./styles/Certifications.css";

const certificates = [
  { id: 1, title: "Avishkar AI", img: "/images/avishkar.jpg" },
  { id: 2, title: "Maya Netra VR", img: "/images/mayanetra.png" },
  { id: 3, title: "React Dev", img: "/images/react2.webp" },
  { id: 4, title: "Python Deep Learning", img: "/images/python image.jpg" },
  { id: 5, title: "Next.js Fullstack", img: "/images/next2.webp" },
];

const Certifications = () => {
  return (
    <div className="certifications-full-section" id="certifications-full">
      <h2 className="section-title">All Certifications</h2>
      <div className="marquee-container">
        <Marquee speed={60} pauseOnHover={true} gradient={false}>
          {certificates.map((cert) => (
             <div className="cert-card" key={cert.id}>
               <div className="cert-img-wrapper">
                 <img src={cert.img} alt={cert.title} />
               </div>
               <div className="cert-info">
                 <h4>{cert.title}</h4>
                 <div className="view-btn">View Credential</div>
               </div>
             </div>
           ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Certifications;
