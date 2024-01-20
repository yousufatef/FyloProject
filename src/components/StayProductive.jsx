const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center text-white">
        <div>
          <img
            src="/assets/illustration-stay-productive.png"
            alt="StayProductive-img"
          />
        </div>
        <div>
          <h3 className="text-[35px] font-medium  leading-[50px]">
            Stay productive,
            <br />
            where you are!
          </h3>
          <div className="my-[15px] font-normal text-sm tracking-[0.8px]">
            <p className="mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              totam doloribus ab distinctio corporis eligendi quis reiciendis,
              minima quod provident.
            </p>
            <p>
              Lorem, ipsum distinctio corporis eligendi quis reiciendis, minima
              quod provident, dolores quasi quo neque rem repudiandae vel ex
              saepe impedit!
            </p>
          </div>
          <a
            href="/"
            className="flex items-center gap-[15px] w-fit border-b-2 border-primaryColor text-primaryColor hover:text-[#42b0d1] transition-color duration-200 pb-[5px]"
          >
            See your flow projects
            <img
              src="/assets/icon-arrow.svg"
              alt="arrow-img"
              className="w-[20px] h-[20px] object-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
