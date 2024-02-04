import Image from "next/image";
import LogoFooter from "../../../public/assets/footer_icon.svg";
import InstaIcon from "../../../public/assets/insta_icon.svg";
import TwitterIcon from "../../../public/assets/twitter.svg";
import FbIcon from "../../../public/assets/fb.svg";
import LinkedIn from "../../../public/assets/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-primary text-white px-4 md:px-6 py-4">
      <div className="container mx-auto">
        {/* Top Horizontal Bar */}
        <div className="border-t border-gray-600 w-full py-5 mt-10"></div>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 items-start mt-10">
          <div>
            <Image src={LogoFooter} alt="grove-icon" />
          </div>

          <div>
            <h3 className="font-bold text-secondary">THE GROVE</h3>
            <ul className="flex flex-col gap-2 mt-2 text-gray-300">
              <li>Locations</li>
              <li>
                Shop The Grove <br /> (Coming soon)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-secondary">OTHER</h3>
            <ul className="flex flex-col gap-2 mt-2 text-gray-300">
              <li>Sponsorship</li>
              <li>Corporate Events</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-secondary">FOLLOW US</h3>
            <ul className="flex gap-2 items-center mt-2 text-gray-300">
              <li>
                <Image src={InstaIcon} alt="" />
              </li>
              <li>
                <Image src={TwitterIcon} alt="" />
              </li>
              <li>
                <Image src={FbIcon} alt="" />
              </li>
              <li>
                <Image src={LinkedIn} alt="" />
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="font-bold mb-2">Be the first to know</h3>
            <form>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-4 rounded-lg"
                />
                <button
                  type="submit"
                  className="absolute h-full mr-5 right-0 top-0 px-4 py-4 rounded-lg bg-white text-black font-bold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Copyright © 202X The Grove PubliField
        </p>
        <p className="mt-5">7535 Frederick Street</p>
        <p>Dallas, TX 75208</p>
      </div>
    </footer>
  );
}
