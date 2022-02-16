import { Grid } from "semantic-ui-react";
import styles from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ list }) {
  console.log(list && list.length);
  return (
    <div>
      <Grid columns={3}>
        <Grid.Row>
          {list.map((item) => (
            <Grid.Column key={item.name}>
              <Link href={`/view/${item.id}`}>
                <a>
                  <div className={styles.wrap}>
                    <img
                      src={item.sprites.front_default}
                      alt={item.name}
                      className={styles.item_img}
                    />
                    <strong className={styles.item_name}>{item.name}</strong>
                  </div>
                </a>
              </Link>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  );
}
