const getPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/';
  const answer = await fetch(url);
  const data = await answer.json();
  return data;
};

export default getPokemons;
