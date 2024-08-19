import { Link } from "react-router-dom"

const About = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Link to="/">Home</Link>
      <br />
      {/* <h1>About</h1> */}
      <h2>Front End Developer: Yakubbaev Azamat</h2>
      <h2><a href="https://github.com/OnlineAzamat">Github</a></h2>

    </div>
  )
}

export default About