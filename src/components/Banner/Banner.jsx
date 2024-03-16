import banner from "../../assets/banner.png";
const Banner = () => {
  const background = {
    width: "100%",
    backgroundImage: `linear-gradient(180deg,#150B2B00,#150B2BE6),url(${banner})`,
  };
  return (
    <div className="font-lexend">
      <div
        style={background}
        className="h-[400px] lg:h-[600px]  bg-cover bg-center rounded-3xl w-full"
      >
        <div className="w-10/12 h-[400px] lg:h-[600px] space-y-5 flex flex-col items-center justify-center mx-auto">
          <h1 className=" text-xl lg:text-5xl font-bold text-center text-white ">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="text-white text-center leading-8">
            Elevate your kitchen mastery with personalized classes tailored to
            your taste. Unlock culinary excellence with expert guidance at your
            own pace.
          </p>
          <div className="flex items-center justify-center gap-5">
            <button className="btn rounded-full border-0 px-6 bg-[#0BE58A]">
              Explore Now
            </button>
            <button className="btn rounded-full px-6 text-white bg-[#00000000]">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
