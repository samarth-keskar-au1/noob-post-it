import React from "react";
import ReactDOM from "react-dom";
import LoginComponent from "./components/Login.js";
import {Provider} from "react-redux";
import {store} from "./store/store.js";
import {ManageAccounts} from "./components/Manage-Accounts.js";


class Home extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <div className="container-fullwidth">
      <div className="row">
        <div className="col-md-12">
          <ManageAccounts />
        </div>
      </div>
      </div>
      </Provider>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById("root"));
