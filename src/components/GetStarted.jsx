const GetStarted = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          <div className="absolute left-[50%] translate-x-[-50%] top-[-150px] bg-[#1c2230] rounded-[5px] p-[30px] text-white text-center element-center flex-col w-[865px] max-w-full min-h-[275px]">
            <h3 className="text-[25px] md:text-[35px] font-semibold mb-[15px]">
              Get early access today
            </h3>
            <p className="w-[620px] max-w-full mx-auto mb-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
              beatae eos nam ipsum dolores amet consequuntur accusamus!
            </p>
            <form className="w-full flex justify-between items-center flex-wrap md:px-[60px] gap-[30px]">
              <input type="email" placeholder="email@example.com" className="w-full md:flex-1 h-[50px] rounded pl-[20px] text-black outline-none border-none"/>
              <button type="submit" className="w-full md:w-[200px] h-[50px] bg-[#42b0d1] rounded hover:bg-[#8cdae4] transition-all duration-200">
                Get started for free
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
