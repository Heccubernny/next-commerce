import Link from "next/link";
import Navbar from "../components/Navbar";
export default function IndexPage() {
  return (
    <div className="underline">
      Hello World.
      <Link href="/about">
        <Navbar />
      </Link>
    </div>
  );
}
