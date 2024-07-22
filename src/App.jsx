import "./App.css";
import Navbar from "./components/Navbar";
import bgImg from "./assets/room-bg.jpg";
import searchIcon from "./assets/icons8-search.svg";
import expertIcon from "./assets/expert.png";
import smoothIcon from "./assets/smooth.png";
import varietyIcon from "./assets/variety.png";
import mansion from "./assets/mansion.jpg";
import mansion3 from "./assets/mansion3.jpg";
import bed3 from "./assets/3bed.jpg";
import bed4 from "./assets/4bed.jpg";
import bed5 from "./assets/5bed.jpg";
import bed6 from "./assets/6bed.jpg";
import agentIcon from "./assets/agent.png";
import investingIcon from "./assets/investing.png";
import managementIcon from "./assets/management.png";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <section className="relative">
        <img src={bgImg} alt="" className="h-[350px] md:h-auto" />
        <div className="absolute top-2/4 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-5">
          <div>
            <h1 className="text-3xl md:text-7xl font-extrabold text-slate-900 capitalize">
              Find the perfect property for you.
            </h1>
            <p className="text-white text-lg md:text-3xl">
              Our mission is to give you the best homes for the best price, and
              most especially, the home that is perfect for you.
            </p>
          </div>
          <div className="space-x-3 gap-2 md:gap-0 flex flex-col md:flex-row items-center justify-center">
            <select
              name=""
              id=""
              className="w-96 p-3 pl-2 md:p-6 md:pl-4 border-2 rounded-md border-gray-300 focus:outline-none"
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="text-gray-300"
              >
                Location
              </option>
              <option value="Abuja">Abuja</option>
              <option value="Enugu">Enugu</option>
              <option value="Lagos">Lagos</option>
            </select>

            <select
              name=""
              id=""
              className="w-96 p-3 pl-2 md:p-6 md:pl-4 border-2 rounded-md border-gray-300 focus:outline-none"
            >
              <option
                value=""
                disabled
                selected
                hidden
                className="text-gray-300"
              >
                Status
              </option>
              <option value="rent">For Rent</option>
              <option value="sale">For sale</option>
            </select>

            <button className="bg-blue-400 w-full md:w-auto justify-center md:justify-normal p-4 rounded-md text-white text-lg flex items-center gap-2">
              <img src={searchIcon} alt="search icon" className="w-8 h-8" />
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="my-40">
        <h2 className="font-bold text-6xl my-10">Why choose us?</h2>
        <div className="flex md:flex-wrap lg:flex-nowrap md:justify-center flex-col md:flex-row items-center gap-20 lg:justify-between max-w-7xl mx-auto">
          <div className="">
            <img src={expertIcon} alt="expert" className="mb-5 mx-auto" />
            <div>
              <h2 className="text-2xl font-bold">Expert knowledge</h2>
              <p className="text-xl w-96">
                Take advantage of our deep knowledge and experience in the real
                estate market.
              </p>
            </div>
          </div>
          <div>
            <img
              src={varietyIcon}
              alt="comprehensive"
              className="mx-auto mb-9"
            />
            <div>
              <h2 className="text-2xl font-bold">Comprehensive</h2>
              <p className="text-xl w-96">
                Explore a variety of property listings, from buying and renting
                to Airbnb opportunities.
              </p>
            </div>
          </div>
          <div>
            <img src={smoothIcon} alt="seamless" className="mb-5 mx-auto" />
            <div>
              <h2 className="text-2xl font-bold">Seamless</h2>
              <p className="text-xl w-96">
                Experience a smooth journey from your first consultation to
                closing the deal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-40">
        <h2 className="font-bold text-6xl my-8">Properties</h2>
        <p className="text-3xl text-gray-600">
          Find exceptional properties listed by our trusted real estate agents
        </p>

        <div className="flex flex-col md:justify-center lg:justify-normal md:flex-row items-center gap-8 max-w-7xl mx-auto flex-wrap my-20">
          <div className="w-96 rounded-md border-2">
            <img src={mansion} alt="" className="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern mansion
              </h2>
              <p className="text-xl font-semibold text-slate-800">
                ₦10,000,000
              </p>
              <p className="text-slate-700 text-lg">Condo</p>
            </div>
          </div>

          <div className="w-96 rounded-md border-2">
            <img src={mansion3} alt="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern mansion
              </h2>
              <p className="text-xl font-semibold text-slate-800">
                ₦15,000,000
              </p>
              <p className="text-slate-700 text-lg">Mansion</p>
            </div>
          </div>

          <div className="w-96 rounded-md border-2">
            <img src={bed3} alt="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern Apartment
              </h2>
              <p className="text-xl font-semibold text-slate-800">₦2,000,000</p>
              <p className="text-slate-700 text-lg">Apartment</p>
            </div>
          </div>

          <div className="w-96 rounded-md border-2">
            <img src={bed4} alt="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern Apartment
              </h2>
              <p className="text-xl font-semibold text-slate-800">₦3,000,000</p>
              <p className="text-slate-700 text-lg">Apartment</p>
            </div>
          </div>

          <div className="w-96 rounded-md border-2">
            <img src={bed5} alt="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern Apartment
              </h2>
              <p className="text-xl font-semibold text-slate-800">₦4,000,000</p>
              <p className="text-slate-700 text-lg">Apartment</p>
            </div>
          </div>

          <div className="w-96 rounded-md border-2">
            <img src={bed6} alt="" />
            <div className="space-y-3 p-8">
              <h2 className="text-3xl text-slate-900 font-semibold">
                Modern Apartment
              </h2>
              <p className="text-xl font-semibold text-slate-800">₦5,000,000</p>
              <p className="text-slate-700 text-lg">Apartment</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-bold text-slate-900 text-6xl my-8">Our Services</h2>
        <p className="text-3xl text-gray-600">
          Our brokers offers top services for buying, renting, and Airbnb
          management. Let us help you find the perfect property.
        </p>

        <div className="max-w-7xl md:flex-wrap lg:flex-nowrap mx-auto flex flex-col md:flex-row items-center gap-20 justify-center my-20">
          <div>
            <img src={agentIcon} alt="agent" className="mx-auto mb-3" />
            <div>
              <h2 className="text-3xl text-slate-900 font-semibold">
                Real Estate Agent
              </h2>
              <p className="text-lg text-slate-700">
                We serve as your agent for real estate deals, <br /> giving you
                the very best deals.
              </p>
            </div>
          </div>

          <div>
            <img src={investingIcon} alt="investing" className="mx-auto mb-3" />
            <div>
              <h2 className="text-3xl text-slate-900 font-semibold">
                Property Investing
              </h2>
              <p className="text-lg text-slate-700">
                We help you invest with our expert knowledge, <br /> making you
                tremendous profit.
              </p>
            </div>
          </div>

          <div>
            <img
              src={managementIcon}
              alt="management"
              className="mx-auto mb-3"
            />
            <div>
              <h2 className="text-3xl text-slate-900 font-semibold">
                Property Management
              </h2>
              <p className="text-lg text-slate-700">
                We help you manage your properties, <br /> so you can have peace
                of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
