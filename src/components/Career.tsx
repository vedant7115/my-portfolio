import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Research Head</h4>
                <h5>Enigma AI/ML Club, LNCT</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Leading AI/ML research and development initiatives. Organized “ML Rush” coding event with 120+ participants. Mentored students in deep learning and NLP. Led multiple research projects and coordinated workshops on LLMs and fine-tuning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Selected Participant</h4>
                <h5>Amazon ML Summer School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Trained in advanced ML, deep learning, and scalable AI systems. Gained real-world exposure to production-grade ML workflows, model optimization, and AWS SageMaker.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>Lakshmi Narain College of Technology</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Currently pursuing a Bachelor of Technology with a CGPA of 8.4. Actively applying theoretical knowledge to build practical AI applications and scaling intelligent systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
