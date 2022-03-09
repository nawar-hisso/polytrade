import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Provider } from "react-redux";
import DataTable from "./DataTable";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import reducres from "../../reducers";

const store = createStore(reducres, compose(applyMiddleware(thunk)));
test("On click the button 'Write Data On Chain' The data form modal should be displayed", async () => {
  render(
    <Provider store={store}>
      <DataTable
        transactions={[
          {
            hash: "kasjf",
            data: "asjkfb",
            date: 735278532,
            from: "x4sbibiafbuabi",
          },
        ]}
      />
    </Provider>
  );

  expect(screen.queryByTestId("dataModal")).toBeFalsy();
  expect(await screen.findByTestId("writeData")).toBeEnabled();
  userEvent.click(await screen.findByTestId("writeData"));
  setTimeout(() => expect(screen.getByTestId("dataModal")).toBeTruthy(), 100);
});
