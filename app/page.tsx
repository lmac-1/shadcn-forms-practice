import { CompanyForm } from "@/components/CompanyForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <CompanyForm />
    </main>
  );
}
