import { FaLaptopCode, FaDatabase, FaGamepad } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className="page-section">
      <h1 className="title-strict">Про мене</h1>
      <div className="info-block border-strict p-15">
        <h2>Олександр Гаврилюк</h2>
        <p>Студент 2 курсу спеціальності "Інформаційні технології". Напрямки роботи: веб-розробка, бази даних, системне програмування. Для організації роботи використовую техніку "Simple Next Action" та правило 5 хвилин.</p>
      </div>

      <h2 className="title-strict mt-20">Проєкти та навички</h2>
      <div className="grid-3">
        <div className="card border-strict">
          <h3><FaLaptopCode /> Web & Desktop</h3>
          <p>Стек: React, Node.js, C# (Windows Forms)</p>
          <a href="https://github.com/DES-S-S" target="_blank" rel="noreferrer" className="btn-strict">Репозиторії</a>
        </div>
        <div className="card border-strict">
          <h3><FaDatabase /> Бази даних</h3>
          <p>Стек: MS SQL Server, SQLite, Access</p>
          <a href="https://github.com/DES-S-S" target="_blank" rel="noreferrer" className="btn-strict">Репозиторії</a>
        </div>
        <div className="card border-strict">
          <h3><FaGamepad /> GameDev</h3>
          <p>Стек: C++, Unity, Java</p>
          <a href="https://github.com/DES-S-S" target="_blank" rel="noreferrer" className="btn-strict">Репозиторії</a>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;