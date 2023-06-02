import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Tanar = () => {
  const [tanar, setTanar] = useState({});
  const param = useParams();
  console.log(param);

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch("http://localhost:3500/tanarok");

        if (adat.ok) {
          const jsonData = await adat.json();
          console.log(jsonData);
          let tanarVal = jsonData.msg.filter((elem) => elem._id === param.id);
          console.log(tanarVal);
          setTanar(tanarVal[0]);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, [param.id]);
  return (
    <div className="diak-container">
      <h1>A csapat neve: {tanar.nev}</h1>
      <p>A csere játékosok száma: {tanar.cserejatekosokszama}</p>
      <p>Nemzetsége a csapatnak: {tanar.nemzetseg}</p>
      <img src={tanar.kep} alt="kép" />
    </div>
  );
};

export default Tanar;
