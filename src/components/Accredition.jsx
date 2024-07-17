import React from 'react';
import '../assets/accredition.css';
import ambaLogo from '../assets/img/amba_logo.png'; // Update with the actual path to your image
import aacsbLogo from '../assets/img/aacsbLogo.png'; // Update with the actual path to your image

const Accreditation = () => {
  return (
    <div className="accreditation-container">
      <h2 className="accreditation-title">Accreditation</h2>
      <div className="accreditation-logos">
        <div className="accreditation-item">
          <img src={ambaLogo} alt="AMBA Accredited" className="accreditation-logo" />
          <p className="accreditation-description">
            IIM Tiruchirappalli's PGPM, PGPM-HR and PGPBM programmes were accredited by the Association of MBAs on September 27, 2022.
          </p>
        </div>
        <div className="accreditation-item">
          <img src={aacsbLogo} alt="AACSB Member" className="accreditation-logo" />
          <p className="accreditation-description">
            IIM Tiruchirappalli obtained membership of the Association to Advance Collegiate Schools of Business on May 3, 2023.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accreditation;
