export default function Football() {
  function handleShoot() {
    alert("Great Shoot!");
  }

  return <button onClick={handleShoot}>Shoot!</button>;
}
