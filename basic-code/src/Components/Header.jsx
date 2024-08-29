import './Header.css'
function Header() {
  return (
    <>
    <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer" />
      <header>
        <div className="navbar">
          <div className="img-logo"></div>
          <div className="nav-icon"></div>
          <div className="nav-title">
            <p>Ramesh</p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
          <div className="nav-section2">
            <h3 id="text">Filter</h3>
            <div className="select">
              Create By <br />
              <select>
                <option value="">All</option>
                <option value="">B.tech</option>
                <option value="">M.tech</option>
              </select>
            </div>
            <div className="select2">
              Published date <br />
              <input type="date" placeholder="Select Date" />
            </div>
            <div className="Search">
              Search <br />
              <input type="text" placeholder="Type here" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
