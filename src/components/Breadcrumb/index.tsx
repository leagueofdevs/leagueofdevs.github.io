import { Link } from "react-router-dom";

export interface BreadcrumbProps {
  previousPath: string;
  previousPathName: string;
  currentPathName: string;
}

function Breadcrumb({
  previousPath,
  previousPathName,
  currentPathName,
}: BreadcrumbProps) {
  return (
    <nav className="text-white flex justify-start w-full gap-x-1 mb-6">
      <Link to={previousPath} className="hover:underline">
        {previousPathName}
      </Link>
      / <span className="font-bold">{currentPathName}</span>
    </nav>
  );
}

export default Breadcrumb;
