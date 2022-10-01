import { StyledLi } from "./style";

export const ListItem = ({ listItem, index, deleteListItem }) => {
  return (
    <StyledLi type={listItem.type}>
      <div className="textsDiv">
        <h2>{listItem.description}</h2>
        <span>Entrada</span>
      </div>
      <div className="valueDiv">
        <p>R$ {listItem.value},00</p>
        <button onClick={() => deleteListItem({ index })} type="button">
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </StyledLi>
  );
};
