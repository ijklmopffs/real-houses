import phoneIcon from "../assets/Phone.svg";
import gmailIcon from "../assets/Gmail.svg";
import awardImg from "../assets/award.png";
import logo from "../assets/logo-white.svg";
import instaIcon from "../assets/Instagram.svg";
import fbIcon from "../assets/Facebook.svg";
import tumblIcon from "../assets/Tumblr.svg";
import linkedIcon from "../assets/Linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-[#eeedde]">
      <section className="max-w-[100rem] mx-auto p-8 text-start flex flex-col md:flex-row justify-between">
        <div>
          <h2 className="font-semibold text-4xl text-[#203239]">Contact Us</h2>

          <div className="mt-10 flex items-center gap-8">
            <div className="border-2 border-[#ff7527] rounded-md w-64 p-4">
              <div className="flex items-center gap-2">
                <img src={phoneIcon} alt="" />
                <div>
                  <p className="text-[#203239] font-medium">Call</p>
                  <p className="text-[#203239] font-regular">+44 9404 1230</p>
                </div>
              </div>
              <button className="text-[#ff7527] font-semibold bg-[#ff7527]/20 mt-5 px-8 py-2 rounded-md w-full">
                Call Now
              </button>
            </div>

            <div className="border-2 border-[#ff7527] rounded-md w-64 p-4">
              <div className="flex items-center gap-2">
                <img src={gmailIcon} alt="" className="w-10 h-10" />
                <div>
                  <p className="text-[#203239] font-medium">Email</p>
                  <p className="text-[#203239] font-regular">sap@mail.com</p>
                </div>
              </div>
              <button className="text-white font-semibold bg-[#ff7527] mt-5 px-8 py-2 rounded-md w-full">
                Email
              </button>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="font-semibold text-4xl text-[#203239]">Award</h2>
          <img src={awardImg} alt="" />
        </div>
      </section>
      <div className="bg-[#203239]">
        <div className="max-w-[100rem] mx-auto p-8 flex flex-col md:flex-row gap-4 md:gap-0 justify-between">
          <img src={logo} alt="" />
          <div className="flex items-center gap-12">
            <img src={instaIcon} alt="" />
            <img src={fbIcon} alt="" />
            <img src={tumblIcon} alt="" />
            <img src={linkedIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}
