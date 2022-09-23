import "./style.css";

const TransitionsList = ({
  listTransitions,
  setListTransitions,
  auxListTransitions,
}) => {
  const deleteListItem = (itemId) => {
    const filteredList = listTransitions.filter((item, index) =>
      index !== itemId.index ? item : null
    );
    setListTransitions(filteredList);
  };
  return listTransitions.length === 0 ? (
    <h2 className="emptyList">Você ainda não possui nenhum lançamento</h2>
  ) : auxListTransitions.length === 0 ? (
    <ul className="TransitionsList">
      {listTransitions.map((listItem, index) => {
        return listItem.type === "entry" ? (
          <li key={index} className="listEntry">
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
          </li>
        ) : (
          <li key={index} className="listOutput">
            <div className="textsDiv">
              <h2>{listItem.description}</h2>
              <span>Despesa</span>
            </div>
            <div className="valueDiv">
              <p>R$ {listItem.value},00</p>
              <button onClick={() => deleteListItem({ index })} type="button">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  ) : (
    <ul className="TransitionsList">
      {auxListTransitions.map((listItem, index) => {
        return listItem.type === "entry" ? (
          <li key={index} className="listEntry">
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
          </li>
        ) : (
          <li key={index} className="listOutput">
            <div className="textsDiv">
              <h2>{listItem.description}</h2>
              <span>Despesa</span>
            </div>
            <div className="valueDiv">
              <p>R$ {listItem.value},00</p>
              <button onClick={() => deleteListItem({ index })} type="button">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default TransitionsList;
