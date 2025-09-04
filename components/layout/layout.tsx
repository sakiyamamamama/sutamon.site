import Footer from "./footer";
import Header from "./header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main */}
      <main className="flex-1">
        {children}
        </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
