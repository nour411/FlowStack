import React from "react";
import {
  resourcesLinks,
  platformLinks,
  communityLinks,
} from "../../constants/data";

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="text-md font-semibold mb-4 uppercase tracking-wide text-neutral-400">
      {title}
    </h3>

    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link.text}>
          <a
            href={link.href}
            className="text-neutral-300 hover:text-white transition"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          <FooterColumn title="Resources" links={resourcesLinks} />
          <FooterColumn title="Platform" links={platformLinks} />
          <FooterColumn title="Community" links={communityLinks} />
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
