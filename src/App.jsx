import "./App.css";
import CommissionDisplay from "./components/CommissionDisplay";
import ContactForm from "./components/ContactForm";
import Pricing from "./components/Pricing";
import SocialTiles from "./components/SocialTiles";

function App() {
  return (
    <main className="-mt-[56px]">
      <section className="min-h-screen bg-pastelgreen flex " id="home">
        {" "}
        <div className=" mx-auto w-4/5 lg:w-1/2 flex flex-col-reverse md:flex-row ">
          <div className="bg-gradient-to-b from-pastelpink to-pastelblue border-black border rounded-full mx-auto mb-auto mt-4 md:m-auto  max-w-[400px] max-h-[400px] 2xl:max-h-[500px] 2xl:max-w-[500px]">
            <img src="./heroimg.png" className="py-5 rounded-b-full" />
          </div>
          <div className="text-center md:my-auto mt-auto">
            <h1 className="md:text-6xl text-4xl sm:text-5xl font-bold">
              Hi, I&apos;m roob!
            </h1>
            <p className="text-xl sm:text-2xl tracking-widest">
              Welcome to my website
            </p>
          </div>
        </div>
      </section>
      <section className="min-h-fit bg-pastelgreen flex py-10" id="pricing">
        <div className="bg-[#f5f5f5] border border-t-2 border-black mx-auto w-4/5 lg:w-1/2 rounded px-4 pb-2 md:px-8 md:pb-4">
          <h1 className="lg:text-6xl text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black p-4 rounded-b-2xl w-fit capitalize">
            Pricing
          </h1>
          <p className="tracking-wider p-4 sm:text-lg">
            Pricing is a general guideline and each request will be quoted based
            on the requirements and any extras that might be requested.
          </p>
          <Pricing />
        </div>
      </section>
      <section className="min-h-fit bg-pastelgreen py-10" id="portfolio">
        <div className="bg-[#f5f5f5] border border-t-2  border-black mx-auto w-4/5 lg:w-1/2 rounded px-4 pb-2 md:px-8 md:pb-4">
          <h1 className="lg:text-6xl text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black py-4 px-4 rounded-b-2xl w-fit capitalize">
            My work
          </h1>
          <p className="tracking-wider p-4 sm:text-lg">
            Here are some of my pieces, most can be viewed on my instagram page{" "}
            <a
              className="text-blue-600"
              href="/https://www.instagram.com/onlineroob?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              here
            </a>{" "}
            as well.
          </p>
          <CommissionDisplay />
        </div>
      </section>
      <section className="min-h-fit bg-pastelgreen py-10" id="contact">
        <div className="bg-[#f5f5f5] border-t-2 border border-black   m-auto w-4/5 lg:w-1/2 rounded px-4 pb-2">
          <h1 className="lg:text-6xl text-2xl sm:text-3xl md:text-4xl font-bold text-white bg-black py-4 px-4 rounded-b-2xl w-fit capitalize">
            Contact me
          </h1>{" "}
          <p className="tracking-wider p-4 sm:text-lg">
            Use this contact form to request a commission piece and if I am
            available I will get back to you
          </p>
          <ContactForm />
          <SocialTiles />
        </div>
      </section>
    </main>
  );
}

export default App;
