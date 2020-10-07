import React from "react";
import { pokemo } from "./pokemoSlice";
import { useSelector } from "react-redux";

export const Pokemo = () => {
  const pokemoItem = useSelector(pokemo);
  if (pokemoItem.length !== 0) {
    return (
      <>
        <div>I am {pokemoItem[0].name}</div>
        <div>
          My abilities are:{" "}
          {pokemoItem[0].abilities.map((ability, index) => (
            <p key={index}>{JSON.stringify(ability)}</p>
          ))}{" "}
        </div>
      </>
    );
  }
  return <></>;
};
