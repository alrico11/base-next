import { InstagramIcon, MailIcon } from "lucide-react";
import { LogoBlack } from "../icons";

export default function Footer() {
  return (
    <footer className="w-full p-4 sm:mt-20 mt-16 flex flex-1 py-12 border-t border-primary justify-center  flex-col items-center">
      <div className="max-w-282 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-primary pb-20 ">
        <div className="col-span-2">
          <p className="text-primary text-sm">How we can help?</p>
          <p className="text-lg font-semibold text-primary mt-1">
            +62 87888888 – Letz inn
          </p>
          <div className="flex gap-4 text-xl mt-4">
            <InstagramIcon className="text-primary" />
            <MailIcon className="text-primary" />
          </div>

          <div className="flex items-center gap-2 mt-8">
            <LogoBlack />
          </div>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-md">
            Welcome to Letz Inn — where comfort meets sophistication!
            Experience exceptional hospitality with modern style and thoughtful
            service. At Letz Inn, we’re dedicated to creating a relaxing stay
            designed around your comfort and satisfaction.
          </p>
        </div>

        <div className="flex flex-col gap-12 sm:min-w-114">
          <div className="flex flex-col gap-2">
            <h3 className="font-semibold mb-3">Subscribe Now</h3>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-white shadow-sm">
              <input
                type="text"
                placeholder="Your email"
                className="flex-1 outline-none text-sm"
              />
              <button className="text-gray-500 hover:text-black">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-3">Customer care</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Help center</li>
                <li>Terms & Conditions</li>
                <li>Privacy policy</li>
                <li>Returns & refund</li>
                <li>Survey & feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Pages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Shop</li>
                <li>Contact Us</li>
                <li>Services</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-full mt-6">
        <p className="text-center text-gray-500 text-sm">
          © 2025 Letz Inn. All rights reserved
        </p>
      </div>
    </footer>
  );
}
