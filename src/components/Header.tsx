import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

type Props = {};

export default function Header({}: Props) {
  return (
    <div>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <div className="block gap-10">
        <Link to="/" className="text-2xl">
          Home
        </Link>
        <Link to="/create">Create</Link>
      </div>
    </div>
  );
}
