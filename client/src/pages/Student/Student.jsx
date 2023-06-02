import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Student = () => {
  const [diakok, setDiakok] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500/diakok');

        if (adat.ok) {
          const jsonData = await adat.json();
          setDiakok(jsonData.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return (
    <div>
      {diakok.map((diak, index) => (
        <div className="diak-container" key={index}>
          <Link
            to={{
              pathname: '/diak/' + index,
            }}
          >
            <h1>Csapat neve: {diak.nev}</h1>
          </Link>
          <p>kispadosok száma: {diak.cserejatekosokszama}</p> <p>csapat nemzetsége: {diak.nemzetseg}</p>
          <img src={diak.kep} alt="kép" />
        </div>
      ))}
    </div>
  );
};

export default Student;
