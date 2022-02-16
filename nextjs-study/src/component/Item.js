export default function Item({ item }) {
  const { capture_rate, color, names } = item;
  console.log(capture_rate, color);
  return (
    <>
      <div>
        <strong>{names}</strong>
      </div>
      <div>
        <strong>{color.name}</strong>
      </div>
      <div>
        <strong>{capture_rate}</strong>
      </div>
    </>
  );
}
