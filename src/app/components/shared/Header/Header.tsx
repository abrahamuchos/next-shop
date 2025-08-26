import Link from "next/link";

export default function Header() {

  return (
    <header>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/store">
            <li>Store</li>
          </Link>
        </ul>
      </nav>
      <hr/>
    </header>
  );
}