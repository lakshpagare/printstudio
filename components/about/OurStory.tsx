import Container from "@/components/common/Container";

export default function OurStory() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mx-auto max-w-6xl">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900">
              Passion for Personalized Printing
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              PrintStudio was created with a simple vision —
              making customized products easy, affordable,
              and enjoyable for everyone. From personalized
              apparel to unique gifts, we help customers turn
              their ideas into reality using modern printing
              technology.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {/* Mission */}

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-lg">

              <div className="text-5xl">
                🎯
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To make high-quality customized printing
                accessible for everyone with a simple online
                experience.
              </p>

            </div>

            {/* Vision */}

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-lg">

              <div className="text-5xl">
                🚀
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                To become India's most trusted personalized
                printing platform powered by technology and
                creativity.
              </p>

            </div>

            {/* Values */}

            <div className="rounded-3xl border bg-slate-50 p-8 transition hover:-translate-y-2 hover:shadow-lg">

              <div className="text-5xl">
                ❤️
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                Our Values
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                Customer satisfaction, premium quality,
                innovation, transparency, and fast delivery
                are at the heart of everything we do.
              </p>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}