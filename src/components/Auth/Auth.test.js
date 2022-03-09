import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import Auth from "./Auth";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducres from "../../reducers";

const store = createStore(reducres, compose(applyMiddleware(thunk)));
test("On initial render, the Login with Google button should be disabled - After 100ms shoud be enabled, and when we click it the Storage page will show up", async () => {
  render(
    <Provider store={store}>
      <Auth />
    </Provider>
  );

  expect(screen.queryByText("Storage")).toBeFalsy();
  expect(await screen.findByTestId("googleLogin")).toBeDisabled();
  setTimeout(
    () => expect(screen.getByTestId("googleLogin")).toBeEnabled(),
    100
  );
  setTimeout(() => userEvent.click(screen.getByTestId("googleLogin")), 100);
  setTimeout(() => expect(screen.getByText("Storage")).toBeTruthy(), 100);
});
