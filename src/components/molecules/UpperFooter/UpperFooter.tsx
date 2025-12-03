import Link from "next/link";

import Logo from "@/components/atoms/Logo/Logo";
import { footerLinks } from "@/lib/constants";

const UpperFooter = () => {
  return (
    <div className="flex gap-10">
      <div className="flex-1 w-full flex flex-wrap gap-8 justify-between">
        <div className="">
          <Logo url="/assets/images/logo-black.svg" />
          <p className="max-w-[244px] w-full text-[#333741] sm:text-sm text-xs">
            Empowering teams to build, document, and secure APIs with
            confidence.
          </p>
        </div>
        {footerLinks?.map((parent) => (
          <div key={parent?.title} className="space-y-6">
            <h6 className="text-[#85888E] max-sm:text-sm font-heading font-medium">
              {parent?.title}
            </h6>
            <ul className="space-y-4">
              {parent?.links?.map((link) => (
                <li
                  key={link?.name}
                  className="sm:text-sm text-xs hover:text-purple-600 transitions-all duration-300"
                >
                  <Link href={link?.url}>{link?.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpperFooter;
