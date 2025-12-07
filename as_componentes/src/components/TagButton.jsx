import { Link } from "react-router-dom";

export function TagButton({ url, children, color, onClick }) {
    const colors = {
    green: "bg-green-200",
    red: "bg-red-200",
    blue: "bg-blue-200",
    gray: "bg-gray-200",
  };
  return (
    <Link
      to={url}
      className={`inline-block ${colors[color]} rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
