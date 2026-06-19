import data from "../myData.json";
const Header = () => {
  return (
    <header id="home" className="header">
      <div className="overlay"></div>
      <div className="header-content container">
        <h1 className="header-title">
          <span className="up">HI!</span>
          <span className="down">I am {data.name}</span>
        </h1>
        <p className="header-subtitle">{data.about}</p>

        <a className="btn btn-primary" href="#projects">
          Visit My Works
        </a>
      </div>
    </header>
  );
};

export default Header;
