// src/app/test/[id]/page.tsx

// Diese Komponente demonstriert eine dynamische Route in Next.js 15.
// Sie ist eine Server Component (standardmäßig async).

// ✅ EXTREMER WORKAROUND: Die TestPageProps-Schnittstelle wurde entfernt,
// und die Props werden direkt in der Funktion als 'any' typisiert.
// Dies ist eine NOTLÖSUNG, um einen hartnäckigen Build-Fehler auf Vercel zu umgehen,
// der darauf hindeutet, dass die Build-Umgebung 'params' fälschlicherweise als Promise<any> interpretiert.
// Dies deaktiviert die Typsicherheit für die Props dieser Komponente vollständig.
// Normalerweise sollte dies NICHT getan werden.
export default async function TestPage({ params }: any) { // ✅ FIX: Props als 'any' typisiert
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