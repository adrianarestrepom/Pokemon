const url = "https://pokeapi.co/api/v2/pokemon";

const pokemonInfo = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    data.array.forEach(async element => {
      
    });

  } catch (error) {
    console.log("Error en la URL")
  }
};

pokemonInfo(url)


