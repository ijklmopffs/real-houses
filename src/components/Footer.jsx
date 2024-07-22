import logo from "../assets/logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0 justify-between max-w-7xl mx-auto p-8">
        <img src={logo} alt="logo" />
        <div className="flex flex-col md:flex-row gap-12 md:text-start">
          <div className="space-y-3 flex flex-col">
            <h2 className="text-3xl">Our Service</h2>
            <a href="/">Commercial</a>
            <a href="/">Residential</a>
            <a href="/">Completed</a>
          </div>
          <div className="space-y-3 flex flex-col">
            <h2 className="text-3xl">Company</h2>
            <a href="/">Home</a>
            <a href="/">About Us</a>
            <a href="/">Properties</a>
            <a href="/">Contact</a>
          </div>
          <div className="space-y-3 flex flex-col">
            <h2 className="text-3xl">Connect</h2>
            <a href="/">info@email.org</a>
            <a href="/">+44 94 0432 9100</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
