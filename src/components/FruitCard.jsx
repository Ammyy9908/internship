import { useStateValue } from "../StateProvider";

function FruitCard({ img, initial, setIntitial, title, color }) {
  const [{ user, basket }, dispatch] = useStateValue();
  const handleIncrement = () => {
    setIntitial(initial + 1);
  };

  const handleDecrement = () => {
    setIntitial(initial - 1);
  };

  console.log(user);

  const addToBasket = () => {
    //dispatch some item into datalayer

    handleDecrement();
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: new Date().getTime(),
        title: title,
        image: img,
        color: color,
      },
    });
  };

  const removeTopElement = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      color: color,
    });
    handleIncrement();
  };

  const handleNonAdmin = () => {
    alert("You Have to be Admin to Do this action");
  };
  return (
    <div className="fruit__card">
      <div className="card__image">
        <img src={img} alt="card__image__not__avial" />
      </div>
      <span className="fruit__counter">{initial}</span>
      <div className="counter">
        {basket != null && user && user.name === "Admin" ? (
          <button onClick={addToBasket}>+</button>
        ) : (
          <button onClick={handleNonAdmin}>+</button>
        )}
        <>
          {basket != null && user && user.name === "Admin" ? (
            <button onClick={basket[0].color === color && removeTopElement}>
              -
            </button>
          ) : (
            <button onClick={handleNonAdmin}>-</button>
          )}
        </>
      </div>
    </div>
  );
}

export default FruitCard;
