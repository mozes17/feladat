import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ujtanar = () => {
  const [nev, setNev] = useState("");
  const [cserejatekosokszama, setCserejatekosokszama] = useState(0);
  const [nemzetseg, setNemzetseg] = useState("");
  const [kep, setKep] = useState("");

  const navigate = useNavigate();

  const feldolgoz = (e) => {
    e.preventDefault();
    const adatok = { nev, cserejatekosokszama, nemzetseg, kep };

    const elkuld = async () => {
      const adat = await fetch("http://localhost:3500/tanarok", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(adatok),
      });

      if (adat.ok) {
        const response = await adat.json();
        window.alert(response.msg);
        navigate("/teacher");
      } else {
        const response = await adat.json();
        window.alert(response.msg);
      }
    };

    elkuld();
  };

  return (
    <div className="univerzalis-container">
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="nev">Neve</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nev"
                  id="nev"
                  onChange={(e) => setNev(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="cserejatekosokszama">Kispadosok száma</label>
              </td>
              <td>
                <input
                  type="number"
                  name="cserejatekosokszama"
                  id="cserejatekosokszama"
                  onChange={(e) => setCserejatekosokszama(e.target.value)}
                />
              </td>
            </tr>
            <tr>
            </tr>
            <tr>
              <td>
                <label htmlFor="nemzetseg">Nemzetség</label>
              </td>
              <td>
                <input
                  type="text"
                  name="nemzetseg"
                  id="nemzetseg"
                  onChange={(e) => setNemzetseg(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor="kep">Kép címe</label>
              </td>
              <td>
                <input
                  type="text"
                  name="kep"
                  id="kep"
                  onChange={(e) => setKep(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button onClick={(event) => feldolgoz(event)}>Rögzítés ^^</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Ujtanar;
