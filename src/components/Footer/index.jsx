import './index.scss'
import { AiOutlineGlobal, AiOutlineTwitter, AiOutlineLinkedin } from 'react-icons/ai'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-elements">
          <p>Build by 💜 <span>Sonam Jaiswal</span></p>
          <ul className="social-links">
            <li>
              <a href="https://tech-girl.netlify.app/" target="_blank" rel="noreferrer">
                <AiOutlineGlobal />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/sonam-jaiswal/" target="_blank" rel="noreferrer">
                <AiOutlineLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sona_jais1" target="_blank" rel="noreferrer">
                <AiOutlineTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer