import { smoother } from "./Navbar";
import "./styles/CertificationsPreview.css";

const CertificationsPreview = () => {
  const handleScrollToCerts = () => {
    if (smoother) {
      smoother.scrollTo("#certifications-full", true, "top top");
    } else {
      const certSection = document.getElementById("certifications-full");
      if (certSection) {
        certSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="cert-preview-section">
      <div className="cert-preview-content">
        <h3 className="title">Wall of Achievements</h3>
        <p className="para">A glimpse into my certifications and milestones. Click to view all.</p>
        
        <div className="cert-snippet-container" onClick={handleScrollToCerts}>
          <div className="cert-snippet card-1">
            <img src="/images/avishkar.jpg" alt="Certificate 1" />
          </div>
          <div className="cert-snippet card-2">
            <img src="/images/mayanetra.png" alt="Certificate 2" />
          </div>
          <div className="cert-snippet card-3">
             <div className="more-overlay">+ View All</div>
             <img src="/images/react2.webp" alt="Certificate 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPreview;
