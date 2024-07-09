import { useState } from "react";
import "./assets/styles.css";
import { DatePicker } from "./components/DatePicker";

function App() {
  const [value, setValue] = useState();
  return <DatePicker value={value} onChange={setValue} />;
}
export default App;
