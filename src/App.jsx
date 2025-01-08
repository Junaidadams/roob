import "./App.css";

function App() {
  return (
    <main className="-mt-[56px]">
      <section
        className="min-h-screen bg-pastelgreen flex flex-col-reverse md:flex-row"
        id=""
      >
        {" "}
        <div className="md:w-1/3 w-3/4 bg-gradient-to-b from-pastelpink to-pastelblue border-black border rounded-full mx-auto mb-auto mt-4 md:m-auto">
          <img src="./heroimg.png" className="py-5" />
        </div>
        <div className="md:w-1/3 w-3/4 mx-auto mt-auto mb-4 md:m-auto text-center">
          <h1 className="md:text-6xl text-4xl font-bold">Hi, I&apos;m roob!</h1>
          <p className="text-xl tracking-widest">Welcome to my website</p>
        </div>
      </section>
      <section className="min-h-screen bg-pastelgreen flex" id="">
        <div className="bg-[#f5f5f5] border border-black m-auto w-3/4 lg:w-3/5 h-96 rounded px-4 ">
          <h1 className="lg:text-6xl text-xl sm:text-2xl md:text-4xl font-bold text-white bg-black py-4 px-4 rounded-b-2xl w-fit">
            Pricing
          </h1>
        </div>
      </section>
      <section className="min-h-screen bg-pastelgreen" id=""></section>
    </main>
  );
}

export default App;
