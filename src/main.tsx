import { render } from "preact";
import { App } from "./app";
import "./main.css";

import ScrollObserver from "./utils/scroll-observer";

render(
  <ScrollObserver>
    <App />
  </ScrollObserver>,
  document.getElementById("app")!
);
