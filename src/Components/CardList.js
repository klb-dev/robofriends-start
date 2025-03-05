import React from 'react';
import Cards from './Cards';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Cards 
            key={i} 
            id={robot.id} 
            name={robot.name} 
            email={robot.email} 
        />
      ))}
    </div>
  );
};

export default CardList;