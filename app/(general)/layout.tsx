import Navbar from "@/components/Navbar";


export default function generalLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
     <main>
     <Navbar></Navbar>

      {children}
    </main>
    </>
  );
}