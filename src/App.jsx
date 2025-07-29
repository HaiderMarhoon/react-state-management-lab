import { useState  } from 'react';
import './App.css';
const App = () => {

  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const zombieFighters = [
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]


  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return;
    }
    const newTeam = [...team, fighter];
    setTeam(newTeam);
    setMoney(money - fighter.price);
    calculateTotals(newTeam);
  }

  const calculateTotals = (team) => {
    const strength = team.reduce((sum, fighter) => sum + fighter.strength, 0);
    const agility = team.reduce((sum, fighter) => sum + fighter.agility, 0);
    setTotalStrength(strength)
    setTotalAgility(agility)
  };



  const handleRemoveFighter = (remove) => {
    const removeFighter = team[remove]
    const newTeam = team.filter((_, idx) => idx !== remove)

    setTeam(newTeam)
    setMoney(money + removeFighter.price)
    calculateTotals(newTeam)
  }





  return (

    <div className="App">
      <h1>zombieFighters</h1>
      <div>Current Money: ${money}</div>
      <div>Strength: {totalStrength}</div>
      <div>Agility: {totalAgility}</div>
      <ul>
        {zombieFighters.map((fighter) => (
          <li>
            <h2>{fighter.name}</h2>
            <img src={fighter.img} alt={fighter.name} />
            <p>price : {fighter.price}</p>
            <p>Strength : {fighter.strength}</p>
            <p>agility: {fighter.agility}</p>
            <button
              onClick={() => handleAddFighter(fighter)}
              disabled={money < fighter.price}
            >
              Add to Team
            </button>
          </li>
        ))}
      </ul>
      <h2>Your Team</h2>
      {team.length === 0 ? <p>No fighters in your team.</p> : (
        <ul>
          {team.map((fighter, index) => (
            <li key={index}>
              <h3>{fighter.name}</h3>
              <img src={fighter.img} alt={fighter.name} />
              <p>Price: ${fighter.price}</p>
              <p>Strength: {fighter.strength}</p>
              <p>Agility: {fighter.agility}</p>
              <button onClick={() => handleRemoveFighter(index)}>
                Remove from Team
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App