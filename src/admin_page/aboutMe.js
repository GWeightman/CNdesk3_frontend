import { useState } from "react";
import ReactDOM from "react-dom";

function AboutMe() {
  const [textarea, setTextarea] = useState(
    "About me"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}



export default AboutMe;