import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Container from "@/components/common/Container";
import ProfileCard from "@/components/profile/ProfileCard";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main className="py-12">
        <Container>
          <h1 className="mb-10 text-4xl font-bold">
            My Profile
          </h1>

          <ProfileCard />
        </Container>
      </main>

      <Footer />
    </>
  );
}