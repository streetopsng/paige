const SpanDisplay = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center mb-6 px-4 md:px-8">
      <span className="bg-[#FFBF9D66]  dark:bg-transparent border-primary border text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1 rounded-full ">
        {content}
      </span>
    </div>
  );
};

export default SpanDisplay;
