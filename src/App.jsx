import { useState  } from 'react';
import './App.css';
const App = () => {

  const [money, setMoney] = useState(100);
  const [team, setTeam] = useState([]);
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const zombieFighters = [
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ];

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