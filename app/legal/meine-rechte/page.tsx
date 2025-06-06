"use client"

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"

function MeineRechteContent() {
  const searchParams = useSearchParams()
  const section = searchParams?.get('section')
  
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
            Back to Homepage
          </Link>
        </div>
        <h1 className="text-4xl text-white mb-8">My Rights</h1>
        <div className="prose prose-invert max-w-none">
          <h2>Ihre Rechte als Verbraucher</h2>
          <p>
            Als Verbraucher haben Sie verschiedene Rechte, die wir im Folgenden zusammenfassen:
          </p>

          <h3>1. Widerrufsrecht</h3>
          <p>
            Sie haben das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu widerrufen.
            Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsabschlusses.
          </p>

          <h3>2. Datenschutzrechte</h3>
          <p>
            Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Berichtigung,
            Löschung sowie das Recht auf Einschränkung der Verarbeitung. Detaillierte Informationen finden Sie in
            unserer Datenschutzerklärung.
          </p>

          <h3>3. Beschwerderecht</h3>
          <p>
            Sie haben das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind,
            dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig erfolgt.
          </p>

          <h3>4. Qualitätsgarantie</h3>
          <p>
            Wir legen großen Wert auf die Qualität unserer Dienstleistungen. Sollten Sie mit der Qualität nicht
            zufrieden sein, haben Sie das Recht auf:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Nachbesserung der Leistung</li>
            <li>Preisminderung bei mangelhafter Leistung</li>
            <li>Rücktritt vom Vertrag bei erheblichen Mängeln</li>
          </ul>

          <h3>5. Transparenz</h3>
          <p>
            Sie haben das Recht auf:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Transparente Preisgestaltung</li>
            <li>Klare Vertragsbedingungen</li>
            <li>Vollständige Informationen über die Dienstleistung</li>
          </ul>

          <h3>6. Kontakt und Support</h3>
          <p>
            Bei Fragen zu Ihren Rechten oder bei Beschwerden können Sie sich jederzeit an uns wenden:
          </p>
          <p>
            E-Mail: info@melaniewainwright.com<br />
            Telefon: +49 123 456 7890
          </p>
        </div>
        <div className="mt-8 text-sm text-gray-400">
          <p>Stand: März 2024</p>
          <p>Melanie Wainwright Vocal Coaching</p>
          <p>Torstraße 177, 10115 Berlin</p>
        </div>
      </div>
    </div>
  )
}

export default function MeineRechtePage() {
  return (
    <Suspense fallback={<div className="text-center text-white">Loading consumer rights...</div>}>
      <MeineRechteContent />
    </Suspense>
  )
} 