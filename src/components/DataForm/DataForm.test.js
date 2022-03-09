import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import DataForm from "./DataForm";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducres from "../../reducers";

//Test Scenario:
//Assert-Act-Assert

const store = createStore(reducres, compose(applyMiddleware(thunk)));
test("On initial render, the write button should be disabled", async () => {
  render(
    <Provider store={store}>
      <DataForm />
    </Provider>
  );
  expect(await screen.findByText("Write")).toBeDisabled();
  userEvent.type(screen.getByLabelText("Data"), "hello");
  expect(await screen.findByText("Write")).toBeEnabled();
});
