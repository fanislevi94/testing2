import Link from "next/link";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <div className={classes.logo}>FANIS BLOG</div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/">Index</Link>
          </li>
          {
            <li>
              <Link href="/post">Post</Link>
            </li>
          }
          {
            <li>
              <Link href="/edit">Edit</Link>
            </li>
          }
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
