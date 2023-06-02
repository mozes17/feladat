import { useState, useEffect } from "react";
import { Link, json } from "react-router-dom";

const Teacher = () => {
  const [tanarok, setTanarok] = useState([]);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/tanarok");

        if (adat.ok) {
          const jsonData = await adat.json();
          setTanarok(jsonData.msg);
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

  const torol = (id) => {
    const tanarTorol = async () => {
      const toroltTanar = await fetch("http://localhost:3500/tanarok", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
    };

    tanarTorol();
  };

  return (
    <div className="univerzalis-container">
      <Link to="/tanarfelvetel">Új focis akármi felvétele:</Link>
      {tanarok.map((tanar) => (
        <div className="diak-container" key={tanar._id}>
          <Link
            to={{
              pathname: "/tanar/" + tanar._id,
            }}
          >
            <h1>Csapat neve: {tanar.nev}</h1>
          </Link>
          <p>Cserejátékosok: {tanar.cserejatekosokszama}</p>
          <img src={tanar.kep} alt="kép" />
          <button onClick={torol(tanar._id)}>Töröl</button>
        </div>
      ))}
    </div>
  );
};

export default Teacher;
