import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "../src/component/ItemList";
import { Divider, Header } from "semantic-ui-react";

export default function Home() {
  const [list, setList] = useState([]);
  const API_URL = "https://pokeapi.co/api/v2/pokemon/";

  useEffect(() => {
    getData();
    console.log("start");
    console.log(list);
  }, []);

  function getData() {
    let arr = [];
    axios.get(API_URL).then((res) => {
      res.data.results.map(async (pokemon) => {
        const data = await getPokemonData(pokemon);
        arr.push(data);
      });
      setList(arr);
    });
  }

  async function getPokemonData(pokemon) {
    let url = pokemon.url;
    const poke = await axios.get(url);
    // console.log(poke.data);
    return poke.data;
  }

  return (
    <div>
      <Head>
        <title>Home | HYO0</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>
        포켓몬
      </Header>
      <Divider />

      <ItemList list={list} />
    </div>
  );
}
