import { useRouter } from "next/router";

export default function Navigation() {
  const router = useRouter();

  return (
    <>
      <nav>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/");
          }}
        >
          Spotlight
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/destinations");
          }}
        >
          Destinations
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/tours");
          }}
        >
          Tours
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/about");
          }}
        >
          About
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/blog");
          }}
        >
          Blog
        </button>
        <button
          className="nav__btn"
          onClick={() => {
            router.push("/contacts");
          }}
        >
          Contacts
        </button>
      </nav>
    </>
  );
}
