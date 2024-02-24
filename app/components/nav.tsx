import Image from "next/image";

const Nav = () => {
  return (
    <section className="bg-white">
      <div className="container flex justify-between">
        <div className="flex gap-2 items-center ">
          {/* <Image src="/images/icon.png" alt='le mec rasoir' width={32} height={32} /> */}
          <a href="/" className="text-2xl font-roundo font-medium md:pr-8">
            Le mec rasoir
          </a>
        </div>
        <div>
          <div className="rounded-full bg-black w-16 h-16 flex justify-center items-center">
            <Image src="/images/bars.svg" width={40} height={40} alt="bars" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
