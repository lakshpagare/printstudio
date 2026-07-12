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
            <RegisterForm />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}