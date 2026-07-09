import Container from "@/components/common/Container";

const team = [
  {
    name: "Rahul Sharma",
    role: "Founder & CEO",
    emoji: "👨‍💼",
  },
  {
    name: "Priya Patel",
    role: "Creative Designer",
    emoji: "👩‍🎨",
  },
  {
    name: "Amit Verma",
    role: "Frontend Developer",
    emoji: "👨‍💻",
  },
  {
    name: "Sneha Joshi",
    role: "Customer Success",
    emoji: "👩‍💼",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Meet Our Team
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Passionate People Behind PrintStudio
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our talented team works together to create
            high-quality personalized products and provide
            an exceptional customer experience.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-slate-100 text-6xl">
                {member.emoji}
              </div>

              <h3 className="mt-6 text-2xl font-semibold">
                {member.name}
              </h3>

              <p className="mt-2 text-blue-600 font-medium">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}