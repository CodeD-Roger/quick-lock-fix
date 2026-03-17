interface Props {
  title: string;
  content: string;
  id: string;
}

const VilleSeoBlock = ({ title, content, id }: Props) => {
  const paragraphs = content.split("\n\n").filter(Boolean);

  return (
    <section className="py-16 md:py-24 bg-white" aria-labelledby={id}>
      <div className="container max-w-4xl mx-auto px-5 sm:px-6">
        <h2 id={id} className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#1a2c4e] mb-8">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-[#475569] leading-[1.85] mb-5 text-base sm:text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VilleSeoBlock;
