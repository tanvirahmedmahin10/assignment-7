import Image from "next/image";
import Link from "next/link";
import logo from "@/Assests/logo-icon.png";
import MarqueeNav from "./MarqueeNav";
import FormattedDate from "./FormatDate";
import CategoryFetching from "./CategoryFetching";
import CategoryNav from "./CategoryNav"; 
import NavButton from "./NavbarButton/NavButton";

const Navbar = async () => {
  const data = await CategoryFetching();


  return (
    <div className="bg-white">
      <div className="my-3 max-w-7xl mx-auto flex justify-between">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="w-15 h-15 bg-green-600 rounded-2xl flex items-center justify-center">
              <Image
                src={logo}
                alt="logo-icon"
                width={30}
                height={30}
              />
            </div>

            <div>
              <h2 className="text-2xl font-bold">বাজার দর</h2>
              <FormattedDate />
            </div>
          </div>
        </Link>

        <NavButton></NavButton>
      </div>

      <CategoryNav data={data} />

      <div className="border border-gray-100 p-3">
        <MarqueeNav />
      </div>
    </div>
  );
};

export default Navbar;