import { StyledDropdown2 } from "./Dropdown2.styles";

const Dropdown2 = () => {
  const btns = document.querySelectorAll(".btn");
  const dropMenus = document.querySelectorAll(".drop-menu");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      removeActive();
      btn.classList.add("active");
      document.querySelector(btn.dataset.target).classList.add("active");
    });
  });

  const removeActive = () => {
    btns.forEach((btn) => btn.classList.remove("active"));
    dropMenus.forEach((dropmenu) => dropmenu.classList.remove("active"));
  };

  window.onclick = (e) => {
    if (!e.target.matches(".btn")) {
      removeActive();
    }
  };

  return (
    <StyledDropdown2>
      <div className="container">
        {/* Dropleft */}
        <div className="drop-wrapper">
          <button className="btn" data-target="#dropleft">
            dropleft
          </button>
          <div className="drop-menu dropleft" id="dropleft">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <div className="divider"></div>
            <a href="#">Link 5</a>
          </div>
        </div>
        {/* Dropdown */}
        <div className="drop-wrapper">
          <button className="btn" data-target="#dropdown">
            dropdown
          </button>
          <div className="drop-menu dropdown" id="dropdown">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <div className="divider"></div>
            <a href="#">Link 5</a>
          </div>
        </div>
        {/* Dropup */}
        <div className="drop-wrapper">
          <button className="btn" data-target="#dropup">
            dropup
          </button>
          <div className="drop-menu dropup" id="dropup">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <div className="divider"></div>
            <a href="#">Link 5</a>
          </div>
        </div>
        {/* Dropright */}
        <div className="drop-wrapper">
          <button className="btn" data-target="#dropright">
            dropright
          </button>
          <div className="drop-menu dropright" id="dropright">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
            <a href="#">Link 4</a>
            <div className="divider"></div>
            <a href="#">Link 5</a>
          </div>
        </div>
      </div>
    </StyledDropdown2>
  );
};

export default Dropdown2;
