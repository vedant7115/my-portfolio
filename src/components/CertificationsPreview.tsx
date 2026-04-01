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
            <img src="/images/amazonml certificate.jpg" alt="Amazon ML Summer School" />
          </div>
          <div className="cert-snippet card-2">
            <img src="/images/ai certificate nptel.jpg" alt="NPTEL AI" />
          </div>
          <div className="cert-snippet card-3">
             <div className="more-overlay">+ View All</div>
             <img src="/images/ccna-introduction-to-networks.png" alt="Cisco CCNA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationsPreview;
