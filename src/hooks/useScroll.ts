import { useContext } from "preact/hooks";
import { ScrollContext } from "../utils/scroll-observer";

export default () => {
  return useContext(ScrollContext);
};
