import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/layout/SkipLink";
import { SensorySafeProvider } from "@/components/sensory/SensorySafeProvider";

export async function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <SensorySafeProvider>
      <div className="page-shell flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </SensorySafeProvider>
  );
}
