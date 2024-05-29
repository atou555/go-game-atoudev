import Link from "next/link";
export const Header = () => {
  return (
    <div className="nav-menu">
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};
