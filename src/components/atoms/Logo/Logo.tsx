import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/assets/images/Logo.svg"
        alt="logo"
        width={120}
        height={60}
        priority
        className="object-fit w-auto h-auto"
      />
    </Link>
  );
};

export default Logo;
