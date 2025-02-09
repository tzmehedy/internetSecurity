import logo from "../assets/images/buildingmanagementimages1.png"
const NavBar = () => {
    return (
      <div className="navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <details>
                  <summary className="border rounded-xl">Produkty</summary>
                  <ul className="p-2 w-56">
                    <li>
                      <a>Arcabit Home Security</a>
                    </li>
                    <li>
                      <a>Arcabit Internet Security</a>
                    </li>
                    <li>
                      <a>Arcabit Endpoint Security</a>
                    </li>
                    <li>
                      <a>Arcabit Small Office Security</a>
                    </li>
                    <li>
                      <a>Arcabit Bezpieczna Szkoła</a>
                    </li>
                    <li>
                      <a>Arcabit Server</a>
                    </li>
                    <li>
                      <a>Arcabit Android Antivirus</a>
                    </li>
                    <li>
                      <a>Wersje OEM</a>
                    </li>
                    <li>
                      <a>Arcabit Skaner Online</a>
                    </li>
                    <li>
                      <a>Specyfikacja Arcabit</a>
                    </li>
                    <li>
                      <a>Porównanie produktów</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>Home and small business</a>
              </li>
              <li>
                <a>Education</a>
              </li>
              <li>
                <a>Office</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a>Store</a>
              </li>
            </ul>
          </div>
          <img src={logo} className="w-56 h-12 text-xl" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  px-5 space-x-2 font-bold">
            <li>
              <details>
                <summary className="border rounded-xl">Produkty</summary>
                <ul className="p-2 w-56 text-black">
                  <li>
                    <a>Arcabit Home Security</a>
                  </li>
                  <li>
                    <a>Arcabit Internet Security</a>
                  </li>
                  <li>
                    <a>Arcabit Endpoint Security</a>
                  </li>
                  <li>
                    <a>Arcabit Small Office Security</a>
                  </li>
                  <li>
                    <a>Arcabit Bezpieczna Szkoła</a>
                  </li>
                  <li>
                    <a>Arcabit Server</a>
                  </li>
                  <li>
                    <a>Arcabit Android Antivirus</a>
                  </li>
                  <li>
                    <a>Wersje OEM</a>
                  </li>
                  <li>
                    <a>Arcabit Skaner Online</a>
                  </li>
                  <li>
                    <a>Specyfikacja Arcabit</a>
                  </li>
                  <li>
                    <a>Porównanie produktów</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="hover:border-b-2">Download</a>
            </li>
            <li>
              <a className="hover:border-b-2">Business</a>
            </li>
            <li>
              <a className="hover:border-b-2">Home and small business</a>
            </li>
            <li>
              <a className="hover:border-b-2">Education</a>
            </li>
            <li>
              <a className="hover:border-b-2">Office</a>
            </li>
            <li>
              <a className="hover:border-b-2">Contact</a>
            </li>
            <li>
              <a className="hover:border-b-2">Store</a>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;