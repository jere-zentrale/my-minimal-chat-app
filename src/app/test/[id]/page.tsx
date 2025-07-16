// src/app/test/[id]/page.tsx

// Diese Komponente demonstriert eine dynamische Route in Next.js 15.
// Sie ist eine Server Component (standardmäßig async).

interface TestPageProps {
  readonly params: {
    id: string; // Der dynamische Teil der URL, z.B. '123' in /test/123
  };
  // searchParams sind optional und werden hier nicht verwendet,
  // aber es ist gut zu wissen, dass sie auch als Props verfügbar wären.
  readonly searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function TestPage({ params }: TestPageProps) {
  const { id } = params; // Destrukturierung des 'id'-Parameters

  // Du könntest hier asynchrone Operationen ausführen, z.B. Daten von einer API holen
  // const data = await fetchData(id);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Testseite für dynamische Route</h1>
      <p>Der übergebene Parameter (ID) ist: <strong>{id}</strong></p>
      <p>Dies ist eine Next.js 15 Server Component.</p>
      <p>Versuche, die URL zu ändern, z.B. `/test/hallo-welt` oder `/test/456`.</p>
    </div>
  );
}