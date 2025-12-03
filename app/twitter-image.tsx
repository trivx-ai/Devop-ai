import { ImageResponse } from 'next/og'

// Image metadata
export const alt = 'Trivx AI - AI-Powered DevOps Automation Platform'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background gradient accent */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '60%',
            height: '60%',
            background: 'radial-gradient(circle, rgba(232, 64, 33, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(60px)',
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            height: 100,
            background: 'linear-gradient(135deg, #E84021 0%, #FF6B4A 100%)',
            borderRadius: 20,
            marginBottom: 30,
          }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        {/* Main heading */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 15,
            background: 'linear-gradient(135deg, #ffffff 0%, #cccccc 100%)',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'flex',
          }}
        >
          Trivx AI
        </div>

        {/* Subheading */}
        <div
          style={{
            fontSize: 32,
            textAlign: 'center',
            color: '#cccccc',
            maxWidth: '80%',
            display: 'flex',
          }}
        >
          AI-Powered DevOps Automation Platform
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
