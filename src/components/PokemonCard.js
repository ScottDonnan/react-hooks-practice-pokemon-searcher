import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, id, sprites}) {
  const [flipCard, setFlipCard] = useState(true)
  
  return (
    <Card>
      <div>
        <div className="image">
          <img 
            src={flipCard ? sprites.front : sprites.back} 
            alt="oh no!"
            onClick={() => setFlipCard(flipCard => !flipCard)} 
          />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
