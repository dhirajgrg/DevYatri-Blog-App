import { useNavigate, Link } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      {/* Announcement bar */}
      {/* <div className="bg-green-500 py-2 text-center">
        <span className="font-sans text-xs font-semibold tracking-widest uppercase text-black">
          New Series: Enterprise Architecture in 2026 &rarr; Read Now
        </span>
      </div> */}

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b border-neutral-900 px-8 flex items-center justify-between h-14"
        style={{
          background: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full" />
          <Link
            to={"/"}
            className="font-serif text-lg tracking-tight text-neutral-50"
          >
            Dev
          </Link>
          <Link
            to={"/"}
            className="font-sans text-xs tracking-widest uppercase text-neutral-700 mt-0.5"
          >
            Yatri
          </Link>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {["Home", "Journey", "blog", "Projects", "Portfolio", "About"].map(
            (item) => (
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                key={item}
                className="nav-link"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={"/suscribe"}
            className="btn-green-outline hidden md:inline-flex"
          >
            Subscribe
          </button>
          <button onClick={"/write"} className="btn-green">
            Write
          </button>
        </div>
      </nav>
    </>
  );
}
