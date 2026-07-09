import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import RegisterForm from "@/components/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <Navbar />

      <main className="py-16">
        <Container>
          <div className="mx-auto max-w-md">
            <h1 className="mb-8 text-center text-4xl font-bold">
              Create Account
            </h1>

            <RegisterForm />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}