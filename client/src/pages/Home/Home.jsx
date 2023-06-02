import { useEffect, useState } from 'react';

const Home = () => {
  const [szoveg, setSzoveg] = useState('');

  useEffect(() => {
    const data = async () => {
      try {
        const adat = await fetch('http://localhost:3500');

        if (adat.ok) {
          const jsonData = await adat.json();
          setSzoveg(jsonData.msg);
        } else {
          const jsonData = await adat.json();
          console.log(jsonData);
          setSzoveg(jsonData.msg);
        }
      } catch (error) {
        console.log(error);
      }
    };

    data();
  }, []);

  return (
    <div className="diak-container">
      <p>FOCI funfact : {szoveg}</p>
      <img src='https://upload.wikimedia.org/wikipedia/en/d/da/Pivot_soccer.gif'></img>
    </div>
  );
};

export default Home;
