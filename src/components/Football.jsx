export default function Football() {
  function handleShoot(a) {
    alert(a);
  }

  return <button onClick={() => handleShoot("Great Shoot!")}>Shoot!</button>;
}
