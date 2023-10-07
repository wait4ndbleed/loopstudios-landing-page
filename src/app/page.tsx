import { Header } from "@/components/Header";
import { HomeBot } from "@/components/HomeBot";
import { HomeTop } from "@/components/HomeTop";

export default function Home() {
  return (
    <main className="max-w-[var(--max-width)] m-auto px-[var(--mobile-padding)] md:px-[var(--tablet-padding)] lg:px-[var(--side-padding)]">
      <HomeTop />
      <HomeBot />
    </main>
  )
}
