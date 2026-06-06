import SectionLabel from "./SectionLabel";

const values = [
  {
    icon: "🫶",
    title: "Community First",
    desc: "We hire locally, source locally, and give back locally. Every cup supports the neighbourhood we call home.",
  },
  {
    icon: "✨",
    title: "Quality Always",
    desc: "No shortcuts. From coffee beans to fresh bakes, every detail is handled with care and patience.",
  },
  {
    icon: "🌱",
    title: "Sustainable Choices",
    desc: "We use mindful packaging, reduce waste, and work with responsible farms across South India.",
  },
  {
    icon: "🤎",
    title: "Warm Hospitality",
    desc: "Every guest is welcomed with comfort, kindness, and the feeling of stepping into a familiar place.",
  },
];

const team = [
  {
    name: "Arjun Sharma",
    role: "Co-Founder · Head Barista",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80",
  },
  {
    name: "Priya Reddy",
    role: "Co-Founder · Executive Chef",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&q=80",
  },
  {
    name: "Karan Mehta",
    role: "Head of Roasting",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&q=80",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FFF7EC] text-[#2B170A]">
      {/* HERO */}
      <section className="relative min-h-[85vh] px-6 md:px-16 pt-32 pb-20 overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#E8B573]/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-[#8B451F]/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 bg-white/70 border border-[#E8D2B8] rounded-full px-5 py-2 mb-7 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B66A2C]" />
            <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#8A562F]">
              Our Story
            </span>
          </div>

          <h1 className="font-playfair text-7xl md:text-9xl font-bold leading-[0.9] tracking-[-0.05em] mb-7">
              <span className="text-[#2B170A]">More</span>{" "}
              <span className="text-[#C17A3D] italic">Than.</span>
              <br />
              <span className="text-[#2B170A]">Just</span>{" "}
              <span className="text-[#C17A3D] italic">Coffee.</span>
              <br />
            </h1>

          <p className="text-[#7A5A3A] text-lg leading-relaxed max-w-xl mb-9">
            BrewHaven is a cozy corner built for slow mornings, warm
            conversations, handcrafted coffee, and honest food made with care.
          </p>

          <div className="grid grid-cols-3 gap-4 max-w-lg">
            {[
              ["2018", "Started"],
              ["18+", "Team Members"],
              ["60+", "Seats"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="bg-white/80 border border-[#E8D2B8] rounded-3xl p-5 shadow-sm"
              >
                <h3 className="font-playfair text-3xl text-[#8B451F]">
                  {num}
                </h3>
                <p className="text-xs uppercase tracking-widest font-bold text-[#7A5A3A]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=800&q=80"
              alt="Cafe interior"
              className="h-[520px] w-full object-cover rounded-t-full rounded-b-[2.5rem] shadow-2xl"
            />

            <div className="space-y-4 pt-16">
              <img
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=80"
                alt="Coffee beans"
                className="h-64 w-full object-cover rounded-[2rem] shadow-xl"
              />

              <div className="bg-[#2B170A] rounded-[2rem] p-6 text-white shadow-xl">
                <p className="text-white/55 text-sm mb-2">Founded by</p>
                <h3 className="font-playfair text-2xl">Arjun & Priya</h3>
                <p className="text-[#E8B573] font-semibold mt-1">
                  Barista × Baker
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 md:px-16 py-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <SectionLabel>The Kapi-Cafe Story</SectionLabel>
            {/* <h2 className="font-playfair text-5xl !text-[#2B170A] leading-tight sticky top-28">
              Built with passion,
              <br />
              brewed with purpose.
            </h2> */}
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-[#E8D2B8] shadow-sm">
            <p className="text-[#7A5A3A] leading-loose mb-6">
              KapiCafe was born in 2018 from a simple belief: every
              neighbourhood deserves a place where time slows down,
              conversations deepen, and coffee is taken seriously.
            </p>

            <p className="text-[#7A5A3A] leading-loose mb-6">
              Founders Arjun Sharma and Priya Reddy — a barista and a baker —
              pooled their savings, found a narrow space in Jubilee Hills,
              painted the walls themselves, and opened on a rainy Tuesday
              morning to seven customers.
            </p>

            <p className="text-[#7A5A3A] leading-loose">
              They grew not through advertising but through word of mouth —
              through the kind of experience that makes people text a friend:
              “You have to come here.”
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 md:px-16 pb-24">
        <div className="mb-12">
          <SectionLabel>What We Believe</SectionLabel>
          <h2 className="font-playfair text-5xl !text-[#2B170A]">
            Values inside every cup.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`rounded-[2rem] p-7 min-h-[280px] shadow-sm hover:-translate-y-2 transition ${
                index === 0 || index === 3
                  ? "bg-[#2B170A] text-white"
                  : "bg-white border border-[#E8D2B8]"
              }`}
            >
              <div className="text-5xl mb-6">{value.icon}</div>

              <h3
                className={`font-playfair text-2xl mb-4 ${
                  index === 0 || index === 3 ? "text-white" : "text-[#2B170A]"
                }`}
              >
                {value.title}
              </h3>

              <p
                className={`leading-relaxed ${
                  index === 0 || index === 3
                    ? "text-white/65"
                    : "text-[#7A5A3A]"
                }`}
              >
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-6 md:px-16 pb-24">
        <div className="relative overflow-hidden rounded-[3rem] min-h-[420px] flex items-center p-8 md:p-16 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1400&q=80"
            alt="Cafe table"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#2B170A]/90 via-[#2B170A]/70 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <p className="text-[#E8B573] text-6xl font-playfair mb-4">“</p>

            <h2 className="font-playfair text-4xl md:text-5xl text-white leading-tight mb-6">
              We never wanted to build just another café. We wanted to build a
              place people remember.
            </h2>

            <p className="text-white/60">— Arjun & Priya, Founders</p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#2B170A] px-6 md:px-16 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <SectionLabel>The Crew</SectionLabel>
            <h2 className="font-playfair text-5xl text-white mt-3">
              The faces behind the magic.
            </h2>
            <p className="text-white/55 mt-4">
              Each team member is trained in craft, not just procedure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`bg-[#FFF7EC] rounded-[2rem] overflow-hidden shadow-2xl group ${
                index === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="h-80 overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">
                <h4 className="font-playfair text-2xl text-[#2B170A] mb-2">
                  {member.name}
                </h4>
                <p className="text-[#8B451F] text-xs font-bold tracking-widest uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}