function Result(props) {
  console.log(props.userResponse);
  return (
    <div className="knwldge">
      Hey {props.user ? props.user : "User"}, your score is {props.score}
    </div>
  );
}

export default Result;
