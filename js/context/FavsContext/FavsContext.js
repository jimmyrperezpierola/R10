import React, { Component, createContext } from "react";
import { addFav, removeFav, getFav } from "../../config/models";
const FavsContext = React.createContext();

class FavProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favIds: []
    };
  }

  componentDidMount() {
    this.getFavSessionsIds();
  }
  getFavSessionsIds = () => {
    try {
      this.setState({ favIds: getFav() });
    } catch (error) {
      console.log(error);
    }
  };

  addFavSession = sessionId => {
    try {
      addFav(sessionId);
      this.getFavSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };

  removeFavSession = sessionId => {
    try {
      removeFav(sessionId);
      this.getFavSessionsIds();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <FavsContext.Provider
        value={{
          ...this.state,
          getFav: this.getFavSessionsIds,
          addFav: this.addFavSession,
          removeFav: this.removeFavSession
        }}
      >
        {this.props.children}
      </FavsContext.Provider>
    );
  }
}
// more code will go here!

export { FavProvider };
export default FavsContext;
