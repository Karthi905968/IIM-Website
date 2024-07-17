import React from 'react';
import '../assets/footer.css';
import iimLogo from '../assets/img/iim_logo.png'
import facebook from '../assets/img/icon-facebook.svg'
import linkedIn from '../assets/img/icon-linkedin.svg'
import insta from '../assets/img/icon-insta.svg' 
import youtube from '../assets/img/icon-youtube.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className='footer-inside'>
         <div className='footer-logo'>
           <img src={iimLogo} alt="IIM" />
           <h1>IIM Trichy</h1>
         </div>
         <div className='footer-content'>
          <ul>
            <li>
              <p>Notifications</p>
              <article>Admissions</article>
              <article>Careers</article>
              <article>Tenders</article>
            </li>
            <li>
            <p>Quick Links</p>
              <article>NIRF</article>
              <article>Outreach & CSR</article>
              <article>FAQ</article>
            </li>
            <li>
            <p>Public Info</p>
              <article>Public Grievances </article>
              <article>RTI</article>
              <article>SC/ST Cell</article>
            </li>
            <li>
            <p>More...</p>
              <article>ICC</article>
              <article>About</article>
              <article>Privacy Policy</article>
            </li>
          </ul>
         </div>
      </div>
      <ul class="footer-sns">
			<li class="footer-sns__item"><a href="https://www.instagram.com/iimtrichy/" target="_blank" rel="noopener noreferrer">
					<img class="lozad" src={insta} width="38" height="38" alt="instagram" decoding="async" /></a></li>
			<li class="footer-sns__item"><a href="https://www.linkedin.com/school/iimtrichy/" target="_blank" rel="noopener noreferrer">
					<img class="lozad" src={linkedIn} width="38" height="38" alt="linkedin" decoding="async" /></a></li>
			<li class="footer-sns__item"><a href="https://www.facebook.com/IIMTiruchirappalli/" target="_blank" rel="noopener noreferrer">
					<img class="lozad" src={facebook} width="38" height="38" alt="facebook" decoding="async" /></a></li>
			<li class="footer-sns__item"><a href="https://www.youtube.com/channel/UCXMk9MRdGrNHIK6HN2JeLCQ" target="_blank" rel="noopener noreferrer">
					<img class="lozad" src={youtube} width="38" height="38" alt="youtube" decoding="async" /></a></li>
		</ul>
      <p className='footer-outside'>&copy; 2024 IIT Trichy. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
