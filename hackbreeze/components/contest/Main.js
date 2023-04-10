import classes from "./Main.module.css";

function Main(props) {
  let month = props.date.toLocaleString("en-US", { month: "2-digit" });
  let year = props.date.getFullYear();
  let day = props.date.toLocaleString("en-US", { day: "2-digit" });
  let hour = props.date.getHours().toString().padStart(2, "0");
  let minute = props.date.getMinutes().toString().padStart(2, "0");

  return (
    <div className={classes.main}>
      <div className={classes.name}>
        <div className={classes.name_main}>
          <h2>{props.contest_name}</h2>
        </div>
        <div className={classes.date}>
          <span>{day}-</span>
          <span>{month}-</span>
          <span>{year}&nbsp;&nbsp;</span>
          <span>{hour}:</span>
          <span>{minute}&nbsp;</span>

          <span>am</span>
        </div>
      </div>

      <div className={classes.contest_des}>
        <span>{props.contest_des}</span>
      </div>

      <div className={classes.detail}>
        <div className={classes.duration}>
          <span className={classes.sid}>Duration:</span>
          <span>{props.duration}</span>
        </div>

        <div className={classes.friends_att}>
          <span className={classes.sid}>Friends attending:</span>
          <span>{props.friends_att}</span>
        </div>

        <div className={classes.attendees}>
          <span className={classes.sid}>Attendees:</span>
          <span>{props.attendees}</span>
        </div>
      </div>
    </div>
  );
}
export default Main;
