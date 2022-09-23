import "./style.css";

const Filters = ({ setAuxListTransitions, listTransitions }) => {
  const filter = (type) => {
    type === "all"
      ? setAuxListTransitions([])
      : setAuxListTransitions(
          listTransitions.filter((item) => item.type === type)
        );
  };

  return (
    <div className="filters">
      <h2>Resumo financeiro</h2>
      <div>
        <button
          onClick={() => {
            filter("all");
          }}
          className="button2"
          autoFocus
        >
          Todos
        </button>
        <button
          onClick={() => {
            filter("entry");
          }}
          className="button2"
        >
          Entradas
        </button>
        <button
          onClick={() => {
            filter("output");
          }}
          className="button2"
        >
          Despesas
        </button>
      </div>
    </div>
  );
};

export default Filters;
