"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Mic, Music, Calendar, Check } from 'lucide-react'

// Service types
type ServiceType = 'gesangsunterricht' | 'vocal-coaching' | 'professioneller-gesang' | null

interface ServiceSelectionProps {
  selectedService: ServiceType
  onSelect: (service: ServiceType) => void
}

export default function ServiceSelection({ selectedService, onSelect }: ServiceSelectionProps) {
  const { t } = useTranslation()
  
  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -5,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.2
      }
    }
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-2 w-full px-0"
    >
      <div className="mb-2 text-center">
        <h3 className="text-2xl font-semibold text-white">
          {/* Removed the heading text as requested */}
        </h3>
        <p className="text-gray-400 mt-2">
          {/* Removed the descriptive sentence as requested */}
        </p>
      </div>
      
      <div className="flex flex-col space-y-3 mb-4 w-full mx-auto">
        {/* Live Jazz Performance */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={0}
          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 transform w-full ${
            selectedService === 'professioneller-gesang' 
              ? 'bg-gradient-to-br from-[#1A1A1A] to-[#222] border-[#C8A97E] shadow-lg shadow-[#C8A97E]/10' 
              : 'bg-gradient-to-br from-[#0A0A0A] to-[#151515] border-gray-800 hover:border-[#C8A97E]/50'
          }`}
          onClick={() => onSelect('professioneller-gesang')}
        >
          <div className="flex items-center w-full">
            <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1A1A1A] items-center justify-center mr-3 min-w-[40px]">
              <Mic className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">
                {t('booking.liveJazzPerformance', 'Live Jazz Performance')}
              </h4>
              <p className="text-gray-400 text-xs">
                {t('booking.nachVereinbarung', 'Nach Vereinbarung')}
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Vocal Coaching & Gesangsunterricht */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={1}
          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 transform w-full ${
            selectedService === 'vocal-coaching' 
              ? 'bg-gradient-to-br from-[#1A1A1A] to-[#222] border-[#C8A97E] shadow-lg shadow-[#C8A97E]/10' 
              : 'bg-gradient-to-br from-[#0A0A0A] to-[#151515] border-gray-800 hover:border-[#C8A97E]/50'
          }`}
          onClick={() => onSelect('vocal-coaching')}
        >
          <div className="flex items-center w-full">
            <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1A1A1A] items-center justify-center mr-3 min-w-[40px]">
              <Music className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">
                {t('booking.vocalCoachingAndGesang', 'Vocal Coaching & Gesangsunterricht')}
              </h4>
              <p className="text-gray-400 text-xs">
                45 min
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Jazz Workshop */}
        <motion.div 
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          custom={2}
          className={`p-4 rounded-lg border cursor-pointer transition-all duration-300 transform w-full ${
            selectedService === 'gesangsunterricht' 
              ? 'bg-gradient-to-br from-[#1A1A1A] to-[#222] border-[#C8A97E] shadow-lg shadow-[#C8A97E]/10' 
              : 'bg-gradient-to-br from-[#0A0A0A] to-[#151515] border-gray-800 hover:border-[#C8A97E]/50'
          }`}
          onClick={() => onSelect('gesangsunterricht')}
        >
          <div className="flex items-center w-full">
            <div className="hidden md:flex w-10 h-10 rounded-full bg-[#1A1A1A] items-center justify-center mr-3 min-w-[40px]">
              <Calendar className="w-5 h-5 text-[#C8A97E]" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-medium text-white">
                {t('booking.jazzWorkshop', 'Jazz Workshop')}
              </h4>
              <p className="text-gray-400 text-xs">
                {t('booking.variableDuration', 'Variable Dauer')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
} 