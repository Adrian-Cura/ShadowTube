import Navbar from "@/components/Navbar";
import SideBar from "@/components/SideBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-4">
      <Navbar />
      <SideBar />
    </main>
  );
}
