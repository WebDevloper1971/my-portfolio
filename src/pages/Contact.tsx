const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="about flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[500px]">
        <div className="relative w-1/2 h-full">
          <h1 className="text-3xl font-semibold absolute top-9 left-12">
            Contact
          </h1>
          <p className="tracking-wide leading-7 left-12 absolute top-28">
            Thank You for visiting my portfolio, I would really appreciate your
            feedback.
          </p>
        </div>
        <div className="relative w-1/2 h-full">
          <div className="absolute w-[345px] h-[420px]  bg-opacity-30 top-20 left-12 p-1">
            <form action="" className="w-full h-full flex flex-col gap-7">
              <input
                type="text"
                placeholder="name"
                className="mt-7 border border-black rounded-lg bg-[#FFF2AB] h-12 w-full px-6"
              />
              <input
                type="email"
                placeholder="email"
                className="border border-black rounded-lg bg-[#FFF2AB] h-12 w-full px-6"
              />

              <textarea
                name=""
                placeholder="feedback . . ."
                className="resize-none bg-[#FFF2AB] rounded-lg border border-black px-6 py-3"
                id=""
                rows={5}
              />
              <button
                type="submit"
                className="h-12 w-[100px] text-white bg-black rounded-lg"
              >
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
