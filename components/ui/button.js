import Link from "next/link";

export default function Button({ link, children, style }) {
  return (
    <Link className="customButtonPrimary" href={link} style={style}>
      {children}
    </Link>
  );
}
