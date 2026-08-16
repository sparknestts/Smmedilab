import Header from "@/components/Header";
import BranchesContent from "@/components/branches/BranchesContent";

export default function BranchesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Header />
      <main className="flex-grow">
        <BranchesContent />
      </main>
    </div>
  );
}
