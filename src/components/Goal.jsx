export default function Goal({ goal }) {
  const isGoal = goal;

  const MissedGoal = () => <h1>MISSED!</h1>;
  const MadeGoal = () => <h1>GOAL!</h1>;

  //   if (isGoal) {
  //     return MadeGoal();
  //   } else {
  //     return MissedGoal();
  //   }

  return isGoal ? MadeGoal() : MissedGoal();
}
