import { useState } from "react";
import "./style.css";

const Form = ({ listTransitions, setListTransitions }) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(1);
  const [type, setType] = useState("entry");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      description: description,
      type: type,
      value: Number(value),
    };
    setListTransitions([...listTransitions, data]);
    setDescription("");
    setValue("");
    setType("entry");
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event);
      }}
    >
      <div className="inputDescriptionDiv">
        <label htmlFor="inputDescription">Descrição</label>
        <input
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          name="inputDescription"
          id="inputDescription"
          placeholder="Digite aqui sua descrição"
          required
          value={description}
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="div">
        <div className="inputDiv">
          <label htmlFor="inputValue">Valor</label>
          <input
            onChange={(event) => setValue(event.target.value)}
            type="number"
            min="1"
            step="0.01"
            name="inputValue"
            id="inputValue"
            placeholder="1"
            required
            value={value}
          />
          <span className="inputValueP">R$</span>
        </div>
        <div className="inputDiv">
          <label htmlFor="selectType">Tipo de valor</label>
          <select
            onChange={(event) => setType(event.target.value)}
            name="selectType"
            id="selectType"
            required
            value={type}
          >
            <option value="entry">Entrada</option>
            <option value="output">Saída</option>
          </select>
        </div>
      </div>
      <button className="button1" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
