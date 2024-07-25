import Navbar from "./components/Navbar";
import "./App.css";
import locationIcon from "./assets/Location.svg";
import familyImg from "./assets/family.png";
import arrowIcon from "./assets/Arrow right.svg";
import phoneIcon from "./assets/Phone.svg";
import houseImg from "./assets/house.png";
import casterly from "./assets/casterly.png";
import pinang from "./assets/pinang.png";
import southGrove from "./assets/south.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header className="bg-[#eeedde]">
        <Navbar />

        <section className="flex flex-col md:flex-row p-8 items-center mt-10 justify-between text-start max-w-[100rem] mx-auto">
          <div className="space-y-6">
            <h1 className="font-semibold text-5xl md:text-6xl text-[#203239]">
              Find Family Housing <br /> According to Your Desires
            </h1>
            <p className="text-[#203239]/55 w-96">
              Providing housing for your family with a variety of choices and
              strategic locations in your city in an easier way.
            </p>
            <div className="md:w-fit flex items-center">
              <img src={locationIcon} alt="" className="absolute m-2" />
              <input
                type="text"
                placeholder="Search location, properties, residential groups"
                className="p-6 pl-10 rounded-md border-2 focus:outline-none w-11/12 md:w-[40rem]"
              />
              <button className="bg-[#203239] absolute right-16 md:relative md:right-28 text-white px-6 py-3 rounded-md shadow-md">
                Search
              </button>
            </div>
            <div className="flex flex-col md:flex-row md:items-center gap-6 mt-10 justify-between">
              <div className="w-48">
                <h2 className="font-semibold text-6xl text-[#203239]">
                  200<span className="text-5xl text-[#ff7527]">+</span>
                </h2>
                <p className="text-[#203239]/55">
                  Residential groups has joined
                </p>
              </div>
              <div className="w-48">
                <h2 className="font-semibold text-6xl text-[#203239]">
                  10<span className="text-4xl text-[#ff7527]">years</span>
                </h2>
                <p className="text-[#203239]/55">
                  Already experienced in the market
                </p>
              </div>
              <div className="w-48">
                <h2 className="font-semibold text-6xl text-[#203239]">
                  999<span className="text-5xl text-[#ff7527]">+</span>
                </h2>
                <p className="text-[#203239]/55">
                  Properties available in various Cities
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={familyImg} alt="" />
          </div>
        </section>
      </header>

      <section className="p-8 max-w-[100rem] mx-auto lg:text-start my-20">
        <h2 className="text-[#203239] text-4xl font-semibold md:w-96 md:mx-auto lg:mx-0">
          Easy and Fast Property Purchase Stages
        </h2>
        <div className="mt-10 flex flex-wrap justify-center lg:flex-row items-center gap-8 lg:justify-between">
          <div className="rounded-md border-2 border-[#eeedde] w-64 h-72 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[#203239] text-lg font-semibold">
                Select properties
              </h3>
              <span className="text-[#ff7527] font-bold">01</span>
            </div>
            <p className="text-[#203239]/55 my-5">
              Find the desired property according to the criteria for you and
              your family. You can read more about how to choose property wisely
              here
            </p>
            <div className="flex items-center gap-1 hover:underline cursor-pointer">
              <p>Read More</p>
              <img src={arrowIcon} alt="" />
            </div>
          </div>

          <div className="rounded-md border-2 border-[#eeedde] w-64 h-72 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[#203239] text-lg font-semibold">
                Process Booking
              </h3>
              <span className="text-[#ff7527] font-bold">02</span>
            </div>
            <p className="text-[#203239]/55 my-5">
              Payment in the form of a certain amount of money as a commitment
              to order a certain property unit.
            </p>
            <div className="flex items-center gap-1 hover:underline cursor-pointer mt-12">
              <p>Read More</p>
              <img src={arrowIcon} alt="" />
            </div>
          </div>

          <div className="rounded-md border-2 border-[#eeedde] w-64 h-72 p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-[#203239] text-lg font-semibold">
                Mortgage and Certification
              </h3>
              <span className="text-[#ff7527] font-bold">03</span>
            </div>
            <p className="text-[#203239]/55 my-5">
              KPR financing for home buyers with a financing scheme if necessary
              and continued with the HGB certification process.
            </p>
            <div className="flex items-center gap-1 hover:underline cursor-pointer">
              <p>Read More</p>
              <img src={arrowIcon} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eeedde]">
        <div className="p-8 max-w-[100rem] mx-auto text-start">
          <h3 className="text-[#ff7527] font-medium">Consumer choice</h3>
          <h2 className="text-[#203239] font-semibold text-4xl">
            Favorite Resident
          </h2>
          <div className="mt-10 flex flex-col md:flex-row justify-between gap-20 lg:gap-0">
            <div>
              <img src={houseImg} alt="" />
            </div>
            <div className="space-y-10">
              <h2 className="text-[#203239] text-4xl font-semibold">
                The building was designed by Aristektur Handal
              </h2>
              <p className="text-[#203239] w-96">
                Without a doubt, the properties provided on our website are the
                result of professional collaboration with well-known architects
                and trusted developers.
              </p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-4 px-8 md:px-12 py-2 border-2 border-[#203239] rounded-lg">
                  <img src={phoneIcon} alt="" />
                  Contact us
                </button>
                <button className="bg-[#203239] border-2 rounded-lg px-8 md:px-16 py-3 text-white">
                  Explore more
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[100rem] mx-auto mt-40 lg:text-start p-8">
        <h3 className="text-[#ff7527] font-medium">Auditor&apos;s Choice</h3>
        <h2 className="text-[#203239] font-semibold text-4xl">
          Residents of Various Cities
        </h2>
        <div className="mt-10 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-0">
          <div>
            <img src={casterly} alt="" className="mx-auto" />
            <h2 className="text-[#203239] text-2xl font-medium mt-3">
              Casterly Rock
            </h2>
            <p className="text-[#203239] font-light">
              123 Broadway Ave, Suite 800, Manhattan, New York, NY 10036
            </p>
          </div>

          <div>
            <img src={pinang} alt="" className="mx-auto" />
            <h2 className="text-[#203239] text-2xl font-medium mt-3">
              Pinang Residences
            </h2>
            <p className="text-[#203239] font-light">
              123 Broadway Ave, Suite 800, Manhattan, New York, NY 10036
            </p>
          </div>

          <div>
            <img src={southGrove} alt="" className="mx-auto" />
            <h2 className="text-[#203239] text-2xl font-medium mt-3">
              South Grove
            </h2>
            <p className="text-[#203239] font-light">
              123 Broadway Ave, Suite 800, Manhattan, New York, NY 10036
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
