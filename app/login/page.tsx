import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";

import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Navbar />

      <main className="py-16">
        <Container>
          <div className="mx-auto max-w-md">
            <LoginForm />
          </div>
        </Container>
      </main>

      <Footer />
    </>
  );
}