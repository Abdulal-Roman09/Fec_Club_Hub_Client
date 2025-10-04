import { Home } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-600 mb-4 mt-24 container mx-auto">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className=" hover:underline">
            <Home />
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;
          return (
            <React.Fragment key={routeTo}>
              <li>/</li>
              <li>
                {isLast ? (
                  <span className="text-gray-500 capitalize">{name}</span>
                ) : (
                  <Link
                    to={routeTo}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    {name}
                  </Link>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
