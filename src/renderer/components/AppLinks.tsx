import { Link } from "react-router-dom";

type Link = {
  path: string;
  element: React.ReactNode;
  title: string;
}

type AppLinksProps = {
  links: Link[];
};

const AppLinks = ({ links }: AppLinksProps) => {
  return (
    <div className="links">
      {links.map((link) => (
        <Link key={link.path} to={link.path}>{link.title}</Link>
      ))}
    </div>
  );
};

export default AppLinks;
