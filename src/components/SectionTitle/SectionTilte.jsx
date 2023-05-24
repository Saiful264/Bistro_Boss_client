const SectionTilte = ({ subHadding, headding }) => {
  return (
    <div className="mx-auto text-center md:w-3/12 my-4">
      <p className="text-yellow-600 mb-2">---{subHadding}---</p>
      <h3 className="text-3xl uppercase border-y-4 py-4">{headding}</h3>
    </div>
  );
};

export default SectionTilte;
