const GuideHeader = () => {
  const guideLines = [
    "Ask questions naturally",
    "Explore endpoints interactively",
    "Get setup help instantly",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full gap-4">
      <div className="flex items-center justify-center flex-wrap gap-4">
        {guideLines?.map((guide) => (
          <div key={guide} className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="sm:text-sm text-xs font-medium text-gray-400">
              {guide}
            </p>
          </div>
        ))}
      </div>
      <div className="max-w-lg space-y-4">
        <h2 className="sm:text-[48px] text-2xl font-medium font-heading leading-[100%] tracking-[-0.006em] text-center">
          How Astra Understands, Learns & Guides
        </h2>
        <p className="text-center text-gray-500 c">
          Astra reads your existing documentation, APIs, and changelogs —
          turning them into an intelligent knowledge graph.
        </p>
      </div>
    </div>
  );
};

export default GuideHeader;
