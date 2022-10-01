import { EmptyList } from "../EmptyList/EmptyList";
import { ListItem } from "../ListItem/ListItem";
import "./style.css";

const TransitionsListRender = ({
  listTransitions,
  setListTransitions,
  auxListTransitions,
  transitionType,
}) => {
  const deleteListItem = (itemId) => {
    const filteredList = listTransitions.filter((item, index) =>
      index !== itemId.index ? item : null
    );
    setListTransitions(filteredList);
  };
  if (
    listTransitions.length === 0 ||
    (auxListTransitions.length === 0 && transitionType !== "todos")
  ) {
    return <EmptyList></EmptyList>;
  }
  if (auxListTransitions.length === 0 && transitionType === "todos") {
    return (
      <ul className="TransitionsList">
        {listTransitions.map((listItem, index) => {
          return (
            <ListItem
              listItem={listItem}
              index={index}
              deleteListItem={deleteListItem}
            ></ListItem>
          );
        })}
      </ul>
    );
  } else {
    return (
      <ul className="TransitionsList">
        {auxListTransitions.map((listItem, index) => {
          return (
            <ListItem
              listItem={listItem}
              index={index}
              deleteListItem={deleteListItem}
            ></ListItem>
          );
        })}
      </ul>
    );
  }
};

export default TransitionsListRender;
