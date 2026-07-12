import Container from "@/components/common/Container";

export default function Map() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="mb-12 text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Visit Us
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Find Our Office
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            Visit our office or contact us online. We're always
            happy to help with your custom printing needs.
          </p>

        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">

          <iframe
           src="https://www.google.com/maps?q=Nashik+City,Maharashtra&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

      </Container>
    </section>
  );
}