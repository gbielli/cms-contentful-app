import SimpleForm from "@/components/form/simpleForm";

const headerCenter = () => {
  return (
    <section className="pt-40 bg-white">
      <div className="container grid grid-cols-1 items-center justify-center max-w-5xl">
        <div className="justify-self-center mb-6 text-s">
          <p className="border inline-block px-2 py-1 rounded-full border-slate-700">
            <span className="mr-1">👋</span> Le blog des jeunes parents
          </p>
        </div>
        <h1 className="sm:text-7xl text-[#001744] text-center text-balance md:text-6xl font-medium mb-8 md:mb-4">
          Des avis sincères d'une jeune famille, tout simplement.
        </h1>
        <p className="text-lg text-center mb-8 text-slate-700 text-balance">
          On ne nait pas parent, on le devient. On a décidé de partager nos
          expériences et nos conseils pour aider les jeunes parents.
        </p>
      </div>
      <SimpleForm />
    </section>
  );
};

export default headerCenter;
