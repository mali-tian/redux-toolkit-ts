const POKE_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const PIKACHU = 'pikachu';

export const fetchPikachu = async () => {
  const apiUrl = `${POKE_BASE_URL}/${PIKACHU}`

  try {
    const pikachuResult = await fetch(apiUrl);
    return pikachuResult.json();
  } catch (error) {
    throw new Error(error);
  }
}