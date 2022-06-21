import React from "react";
import { useContext } from "react";
import { Theme } from "./App";
import "./param.css";

const Param = () => {
  const arr = useContext(Theme);
  console.log(arr);
  
  return (
    <div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
      consectetur tenetur voluptatem vel doloremque ad magni quam ab debitis
      reprehenderit hic adipisci repudiandae odio placeat, tempora autem tempore
      optio quas. Distinctio accusamus doloremque atque! Doloremque, recusandae
      qui. Expedita autem excepturi mollitia architecto iure maiores officia
      quod optio deserunt magni, nobis aliquid voluptas consequuntur eos quidem?
      Placeat facere officia omnis nisi. Consequatur, tempore ad voluptatibus
      neque exercitationem ipsam deleniti eveniet, voluptas beatae, mollitia
      illum voluptates excepturi corporis temporibus libero! Exercitationem
      quibusdam quidem saepe dolores consequuntur, magnam aperiam veritatis
      cupiditate enim provident? Debitis quod quo veritatis porro? Ex nobis
      fugit repellendus nulla tempora odit dicta tenetur temporibus,
      necessitatibus magni omnis expedita deserunt adipisci! Consectetur in,
      reprehenderit odit ut et itaque iste reiciendis?
    </div>
  );
};

export default Param;
