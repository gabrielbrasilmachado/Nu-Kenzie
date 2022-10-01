import "./style.css";

const Filters = ({
  setAuxListTransitions,
  listTransitions,
  setTransitionType,
  filterAll,
}) => {
  const filterEntrys = () => {
    const filter = listTransitions.filter((item) => item.type === "entry");
    setAuxListTransitions(filter);
    setTransitionType("entry");
  };

  const filterOutputs = () => {
    const filter = listTransitions.filter((item) => item.type === "output");
    setAuxListTransitions(filter);
    setTransitionType("output");
  };

  return (
    <div className="filters">
      <h2>Resumo financeiro</h2>
      <div>
        <button
          onClick={() => {
            filterAll();
          }}
          className="button2"
          autoFocus
        >
          Todos
        </button>
        <button
          onClick={() => {
            filterEntrys();
          }}
          className="button2"
        >
          Entradas
        </button>
        <button
          onClick={() => {
            filterOutputs();
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
