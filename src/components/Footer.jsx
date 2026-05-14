import { FaGithub } from 'react-icons/fa';

const Footer = () => (
  <footer className="footer border-strict">
    <div>© 2026 Олександр Гаврилюк</div>
    <div className="socials">
      <a href="https://github.com/DES-S-S" target="_blank" rel="noreferrer" className="border-strict">
        <FaGithub /> GitHub
      </a>
    </div>
  </footer>
);
export default Footer;