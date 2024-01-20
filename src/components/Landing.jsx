const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[200px]">
          <div className="w-[750px] max-w-full">
            <img
              src="src/assets/illustration-intro.png"
              alt="Landing-img"
              className="w-full h-fit"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-bold mb-[15px]">
              All your files in one source location,
              <br />
              accessible anywhere.
            </h1>
            <p className="font-normal text-md px-[15px] md:w-[600px] max-w-full md:mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
              accusantium in omnis dolores dolore harum accusamus? Aperiam earum
              provident quasi
            </p>
          </div>
          <a
            href="/"
            className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium"
          >
            Get started
          </a>
        </div>
      </div>
      <div className="w-full h-[200px]">
        <img src="src/assets/bg-curvy-desktop.svg" alt="Wave-img" className="w-full h-full"/>
      </div>
    </section>
  );
};

export default Landing;
