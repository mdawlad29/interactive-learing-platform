import React, { createContext, useContext } from "react";
import PropTypes from "prop-types";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [cartItem, setCartItem] = React.useState([]);
  const [bookMark, setBookMark] = React.useState([]);

  return (
    <StateContext.Provider
      value={{ cartItem, bookMark, setBookMark, setCartItem }}
    >
      {children}
    </StateContext.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateContext = () => useContext(StateContext);
