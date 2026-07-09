import Navbar from "@/components/layout/Navbar";
import Container from "@/components/common/Container";

import Toolbar from "./Toolbar";
import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import Properties from "./Properties";
import BottomBar from "./BottomBar";

export default function DesignStudio() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 py-8">

        <Container>

          <Toolbar />

          <div className="grid gap-6 lg:grid-cols-[260px_1fr_300px]">

            <Sidebar />

            <Canvas />

            <Properties />

          </div>

          <BottomBar />

        </Container>

      </main>
    </>
  );
}