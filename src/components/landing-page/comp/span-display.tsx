const SpanDisplay = ({ content }: { content: string }) => {
  return (
    <div className="flex justify-center mb-6 px-4 md:px-8">
      <span className="bg-[#FFBF9D66] dark:bg-[#5C3D0066] text-primary  text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full font-poppins">
        {content}
      </span>
    </div>
  );
};

export default SpanDisplay;
