import Marquee from "react-fast-marquee";
import "./styles/Certifications.css";

const certificates = [
  {
    id: 1,
    title: "Amazon ML Summer School",
    desc: "Machine Learning Concepts & Applications",
    img: "/images/amazonml certificate.jpg",
    logo: "/images/amazon logo.jpg",
  },
  {
    id: 2,
    title: "NPTEL Artificial Intelligence",
    desc: "Fundamentals of Search & Logic",
    img: "/images/ai certificate nptel.jpg",
    logo: "/images/nptel logo.jpg",
  },
  {
    id: 3,
    title: "NPTEL Machine Learning",
    desc: "Core ML Algorithms & Data Science",
    img: "/images/machine learning certificate nptel.jpg",
    logo: "/images/nptel logo.jpg",
  },
  {
    id: 4,
    title: "Cisco CCNA",
    desc: "Introduction to Networks",
    img: "/images/ccna-introduction-to-networks.png",
    logo: "/images/cisco_logo.jpg",
  },
  {
    id: 5,
    title: "Cisco Cybersecurity",
    desc: "Junior Cybersecurity Analyst",
    img: "/images/junior-cybersecurity-analyst-career-path.1.png",
    logo: "/images/cisco_logo.jpg",
  },
  {
    id: 6,
    title: "Oracle Gen AI",
    desc: "Generative AI Professional",
    img: "/images/oracle certificate  gen ai.jpg",
    logo: "/images/oracle_logo.jpg",
  },
];

const Certifications = () => {
  console.log("Certifications re-rendered with new certificates:", certificates.length);
  return (
    <div className="certifications-full-section" id="certifications-full">
      <h2 className="section-title">All Certifications</h2>
      <div className="marquee-container">
        <Marquee speed={60} pauseOnHover={true} gradient={false}>
          {certificates.map((cert) => (
             <div className="cert-card" key={cert.id}>
               <div className="cert-img-wrapper">
                 <img src={cert.img} alt={cert.title} />
                 {cert.logo && (
                   <div className="cert-logo">
                     <img src={cert.logo} alt="Issuer Logo" />
                   </div>
                 )}
               </div>
               <div className="cert-info">
                 <h4>{cert.title}</h4>
                 {cert.desc && <p className="cert-desc">{cert.desc}</p>}
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
