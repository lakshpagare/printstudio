import Container from "@/components/common/Container";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Office",
    value: "Nashik , Maharashtra, India",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 7887718763",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "printstudio@gmail.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "24/7",
  },
];

export default function ContactInfo() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Contact Information
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            We're always happy to answer your questions and
            help you with your custom printing needs.
          </p>

        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-7">
                  {item.value}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}