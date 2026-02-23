import { Link, useNavigate } from "react-router-dom";

const footerLinks = [
  {
    heading: "Content",
    links: ["Home", "Journey", "Blog", "Projects", "Portfolio", "About"],
  },

  {
    heading: "Legal",
    links: ["Privacy", "Terms", "Cookie Policy"],
  },
];

const socials = [
  { name: "Twitter", url: "https://twitter.com/yourhandle" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
  { name: "GitHub", url: "https://github.com/dhirajgrg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-900 mt-16 pt-24 flex flex-col justify-center items-center ">
      <div className="w-full grid grid-cols-1 md:flex md:justify-around  ">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="font-serif text-lg text-neutral-50">
              Dev Yatri
            </span>
          </div>
          <p className="font-sans text-sm text-neutral-600 leading-relaxed max-w-xs">
            An enterprise knowledge platform for senior engineers, architects,
            and technology leaders.
          </p>
        </div>
        {footerLinks.map(({ heading, links }) => (
          <div key={heading}>
            <div className="section-label mb-4">{heading}</div>
            {links.map((l) => (
              <Link
                to={`/${l}`}
                key={l}
                className="font-sans flex flex-col text-sm text-neutral-600 mb-2 cursor-pointer hover:text-neutral-300 transition-colors"
              >
                {l}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-2">
          <div className="section-label mb-4">Socials</div>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              className="font-sans flex flex-col text-sm text-neutral-600 mb-2 cursor-pointer hover:text-neutral-300 transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>

      <div className=" border-neutral-900 py-10 mt-16">
        <div className="meta-text">© 2026 Dev Yatri. All rights reserved.</div>
      </div>
    </footer>
  );
}
