import about from "/about.jpg";
function About() {
  return (
    <div className=" relative w-full h-full">
      <div className="absolute top-1/2 flex gap-64 left-1/2 -translate-x-1/2 -translate-y-[45%]  bg-opacity-15  w-[80%] h-[600px]">
        <div className="info-section  relative w-1/2">
          <div className="mt-14 ml-12 flex flex-col gap-8">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="tracking-wide text-justify leading-7">
              Hello I'm Vedant, a passionate and enthusiastic full stack java
              developer with a strong foundation in Java, Springboot, React, and
              NextJs. I love designing and developing web applications.{" "}
            </p>
            <p className="tracking-wide text-justify leading-7">
              I graduated from Sant Gadge Baba Amravti University with a Masters
              degree in Computer Application and have completed my internship
              where I honed my skills in both frontend and backend development.
            </p>
            <p className="tracking-wide text-justify leading-7">
              I am always eager to learn and stay updated with the latest trends
              in technology. My goal is to continuously grow as a developer and
              contribute to impactful projects that make a difference.
            </p>
            <p className="tracking-wide text-justify leading-7">
              When I am not coding, you can find me playing chess, drawing a
              portrait, making a game, designing websites, which helps me stay
              creative and balanced
            </p>
          </div>
        </div>

        <div className="w-[350px] h-[600px]">
          <img src={about} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default About;
