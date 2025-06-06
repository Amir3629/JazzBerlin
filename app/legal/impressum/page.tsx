"use client"

import { motion } from "framer-motion"
import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"

function LegalImpressumContent() {
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
        <h1 className="text-4xl text-white mb-8">Imprint</h1>
        <div className="prose prose-invert max-w-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="container mx-auto px-4 py-8 max-w-4xl legal-document-content"
          >
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="mb-4">
                <p>Melanie Wainwright Vocal Coaching</p>
                <p>Torstraße 177</p>
                <p>10115 Berlin</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <div className="mb-4">
                <p>E-Mail: info@melanie-wainwright.de</p>
                <p>Website: www.melanie-wainwright.de</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p className="mb-4">
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                DE XXX XXX XXX
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Streitschlichtung</h2>
              <p className="mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function LegalImpressumPage() {
  return (
    <Suspense fallback={<div className="text-center text-white">Loading imprint...</div>}>
      <LegalImpressumContent />
    </Suspense>
  )
} 