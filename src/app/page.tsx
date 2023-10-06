import { Header } from "@/components/Header";
import { HomeTop } from "@/components/HomeTop";

export default function Home() {
  return (
    <main className="max-w-[var(--max-width)] m-auto pr-[var(--side-padding)] pl-[var(--side-padding)]">
      <HomeTop />
    </main>
  )
}
