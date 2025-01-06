import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-screen">
        <div className="flex flex-col gap-3 w-1/2 p-24">
          <div>
            <h3 className={`uppercase font-rubik text-sm`}>
              Full Stack Web Developer
            </h3>
            <h1 className="2xl:text-6xl lg:text-4xl font-poppins">
              Hello I am <span className="font-semibold">Jamie</span> from the
              UK.
            </h1>
          </div>
          <p className="text-justify">
            I’m a full stack web developer from the UK with a strong passion for
            technology and innovation. Outside of work, I stay active by taking
            part in a range of sports, including skiing, snowboarding,
            badminton, and squash. I’m also a big aviation enthusiast, always
            fascinated by the latest advancements in the industry.
          </p>
        </div>
        <div className="flex flex-col w-1/2 border-black border-2">
          <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden">
            <Image src={'/profile.jpg'} alt="Profile photo" fill className="absolute scale-150" style={{objectFit: 'cover', objectPosition: '10% -50%'}}/>
          </div>
        </div>
      </div>
    </>
  );
}
