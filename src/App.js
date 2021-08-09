import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsRequest } from "./store/thunk/getProductsReques";
import { HomePage } from "./Pages/home/index.jsx";
import { Route, Switch } from "react-router";
import { Navbar } from "./navbar";
import "./index.scss";
import { CorrectList } from "./Pages/correctList";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={CorrectList} />
      </Switch>
      <div>
        <Navbar />
      </div>
    </div>
  );
};

export default App;
