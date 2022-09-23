import "./style.css";

const TotalMoney = ({ listTransitions }) => {
  return (
    <div className="totalMoneyDiv">
      <div>
        <p>Valor total:</p>
        <span>
          {"R$ " +
            listTransitions.reduce((acc, crt) => {
              if (crt.type === "entry") {
                return acc + crt.value;
              } else {
                return acc - crt.value;
              }
            }, 0)}
        </span>
      </div>
      <span>O valor se refere ao saldo</span>
    </div>
  );
};

export default TotalMoney;
