'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  variant?: 'light' | 'dark' | 'banner'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showText?: boolean
  className?: string
  animated?: boolean
}

const Logo = ({ 
  variant = 'light', 
  size = 'md', 
  showText = true, 
  className = '',
  animated = true 
}: LogoProps) => {
  const logoMap = {
    light: '/mahaworld_logo_light.png',
    dark: '/mahaworld_logo_dark.png',
    banner: '/mahaworld_banner.png'
  }

  const sizeMap = {
    sm: { width: 24, height: 24, textSize: 'text-sm' },
    md: { width: 32, height: 32, textSize: 'text-lg' },
    lg: { width: 40, height: 40, textSize: 'text-xl' },
    xl: { width: 48, height: 48, textSize: 'text-2xl' }
  }

  const { width, height, textSize } = sizeMap[size]

  const LogoImage = () => (
    <Image 
      src={logoMap[variant]} 
      alt="Mahaworld Logo" 
      width={width} 
      height={height} 
      className="object-contain"
    />
  )

  const LogoContainer = animated ? motion.div : 'div'

  return (
    <LogoContainer
      className={`flex items-center space-x-2 ${className}`}
      {...(animated && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      })}
    >
      <motion.div
        className="flex items-center justify-center"
        {...(animated && {
          whileHover: { rotate: 360 },
          transition: { duration: 0.6 }
        })}
      >
        <LogoImage />
      </motion.div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-black gradient-text ${textSize}`}>
            Mahaworld
          </span>
          <span className="text-xs text-dark-500 font-medium -mt-1">Innovation Hub</span>
        </div>
      )}
    </LogoContainer>
  )
}

export default Logo 