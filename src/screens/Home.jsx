import React from "react";
import { Link } from "react-router-dom";
import FruitCard from "../components/FruitCard";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

function Home() {
  const [apple, setApple] = React.useState(10);
  const [oranges, setOranges] = React.useState(10);
  const [grapes, setGrapess] = React.useState(10);

  const [{ user, basket }, dispatch] = useStateValue();

  const history = useHistory();

  const handleLogout = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    history.push("/login");
  };

  const cards = [
    {
      id: 1,
      title: "Apple",
      img:
        "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      state: {
        initial: apple,
        setIntitial: setApple,
      },
      color: "tomato",
    },
    {
      id: 2,
      title: "Orange",
      img:
        "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=701&q=80",
      state: {
        initial: oranges,
        setIntitial: setOranges,
      },
      color: "gold",
    },
    {
      id: 3,
      title: "Grape",
      img:
        "https://images.unsplash.com/photo-1601275868399-45bec4f4cd9d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      state: {
        initial: grapes,
        setIntitial: setGrapess,
      },
      color: "purple",
    },
  ];

  return (
    <>
      {" "}
      {user ? (
        <div className="fruits">
          <nav>
            <div className="nav__wrapper">
              <a href="#">Intern</a>
              <div className="nav__link">
                <a href="#" className="button__logout" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            </div>
          </nav>
          <div className="fruits__wrapper">
            {cards.map((item, index) => {
              return (
                <FruitCard
                  img={item.img}
                  initial={item.state.initial}
                  setIntitial={item.state.setIntitial}
                  title={item.title}
                  color={item.color}
                />
              );
            })}
          </div>
          <div className="stack">
            <div className="stack__wrapper">
              <h1>Stack Elements</h1>
              <div className="stack__container">
                {basket
                  ? basket.map((item) => {
                      return (
                        <div
                          className="item"
                          style={{ backgroundColor: item.color }}
                        ></div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1>You have to Login</h1>
          <Link to="/login">Login</Link>
        </div>
      )}
    </>
  );
}

export default Home;
