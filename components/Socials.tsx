import Link from "next/link";
import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube,
} from "react-icons/im";

const Socials = () => {
  return (
    <div className="hidden xl:flex ml-24">
      <ul className="flex gap-x-4">
        <li>
          <Link href={"/"} target="_blank">
            <ImFacebook />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <ImTwitter />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <ImPinterest />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <ImInstagram />
          </Link>
        </li>
        <li>
          <Link href={"/"} target="_blank">
            <ImYoutube />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
