import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "../../src/component/Item";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState({});
  const API_URL = `https://pokeapi.co/api/v2/pokemon-species/${id}/`;

  function getData() {
    axios.get(API_URL).then((res) => {
      setItem(res.data);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Item item={item} />
    </div>
  );
};

export default Post;
