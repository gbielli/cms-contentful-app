"use client";

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
      </div>
    </section>
  );
};

export default Nav;
