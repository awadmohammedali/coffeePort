import ListItem from "./list-item";
import classes from "./mission-and-vision-container.module.css";
export default function MissionAndVissonContainer({ title, list }) {
  return (
    <div className={classes.mainContainer}>
      <h1>{title}</h1>
      <ul>
        {list.map((e, index) => (
          <ListItem key={index}text={e} />
        ))}
      </ul>
    </div>
  );
}
