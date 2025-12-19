import { Header } from '@/components/common/Header';
import { Footer } from '@/components/common/Footer';

/**
 * 메인 레이아웃
 * Header와 Footer를 포함하는 레이아웃
 */
export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 container-custom py-8">{children}</main>
      <Footer />
    </div>
  );
}
