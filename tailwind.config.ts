import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: [
					'var(--font-geist-sans)',
					'var(--font-sans)',
					...fontFamily.sans
				],
				mono: [
					'var(--font-geist-mono)',
					'var(--font-mono)',
					...fontFamily.mono
				]
			},
			colors: {
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)'
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				// Custom brand colors matching client theme
				'color-one': 'var(--color-one)',
				'color-two': 'var(--color-two)',
				'color-three': 'var(--color-three)',
				'color-bg': 'var(--color-bg)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'border-beam': {
					'100%': { 'offset-distance': '100%' }
				},
				'image-glow': {
					'0%': { opacity: '0', 'animation-timing-function': 'cubic-bezier(0.74, 0.25, 0.76, 1)' },
					'10%': { opacity: '0.7', 'animation-timing-function': 'cubic-bezier(0.12, 0.01, 0.08, 0.99)' },
					'100%': { opacity: '0.4' }
				},
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(-10px)' },
					to: { opacity: '1', transform: 'none' }
				},
				'fade-up': {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'none' }
				},
				shimmer: {
					'0%, 90%, 100%': { 'background-position': 'calc(-100% - var(--shimmer-width)) 0' },
					'30%, 60%': { 'background-position': 'calc(100% + var(--shimmer-width)) 0' }
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				},
				'entrance-fade-scale': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'entrance-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'entrance-dissolve': {
					'0%': { opacity: '1', transform: 'translateY(0) scale(1)', filter: 'blur(0px)' },
					'100%': { opacity: '0', transform: 'translateY(-60px) scale(1.05)', filter: 'blur(12px)' }
				},
				'progress-glow': {
					'0%': { 'background-position': '-200% center' },
					'100%': { 'background-position': '200% center' }
				},
				'progress-fill': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'micro-fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '0.5' }
				},
				'gradient-shimmer': {
					'0%': { 'background-position': '-200% center' },
					'100%': { 'background-position': '200% center' }
				},
				'node-pulse': {
					'0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
					'50%': { opacity: '0.8', transform: 'scale(1.5)' }
				},
				'float-particle': {
					'0%, 100%': { transform: 'translateY(0) translateX(0)', opacity: '0.2' },
					'25%': { transform: 'translateY(-20px) translateX(10px)', opacity: '0.5' },
					'50%': { transform: 'translateY(-40px) translateX(-5px)', opacity: '0.3' },
					'75%': { transform: 'translateY(-20px) translateX(15px)', opacity: '0.6' }
				},
				'light-streak': {
					'0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' },
					'50%': { opacity: '0.15' },
					'100%': { transform: 'translateX(200%) skewX(-15deg)', opacity: '0' }
				},
				'glow-pulse': {
					'0%, 100%': { 'text-shadow': '0 0 20px rgba(242, 97, 63, 0.3)' },
					'50%': { 'text-shadow': '0 0 40px rgba(242, 97, 63, 0.6), 0 0 80px rgba(242, 97, 63, 0.2)' }
				},
				'draw-line': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'gentle-float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-12px)' }
				},
				'section-fade-up': {
					'0%': { opacity: '0', transform: 'translateY(40px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rotating-glow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'count-glow': {
					'0%, 100%': { filter: 'brightness(1)' },
					'50%': { filter: 'brightness(1.3)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
				'image-glow': 'image-glow 4100ms 600ms ease-out forwards',
				'fade-in': 'fade-in 1000ms var(--animation-delay, 0ms) ease forwards',
				'fade-up': 'fade-up 1000ms var(--animation-delay, 0ms) ease forwards',
				shimmer: 'shimmer 8s infinite',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				'entrance-fade-scale': 'entrance-fade-scale 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'entrance-float': 'entrance-float 3s ease-in-out infinite',
				'entrance-dissolve': 'entrance-dissolve 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'progress-glow': 'progress-glow 1.5s linear infinite',
				'progress-fill': 'progress-fill 1.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'micro-fade-in': 'micro-fade-in 1s 0.5s ease forwards',
				'gradient-shimmer': 'gradient-shimmer 4s ease-in-out infinite',
				'node-pulse': 'node-pulse 3s ease-in-out infinite',
				'float-particle': 'float-particle 6s ease-in-out infinite',
				'light-streak': 'light-streak 8s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'draw-line': 'draw-line 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'gentle-float': 'gentle-float 4s ease-in-out infinite',
				'section-fade-up': 'section-fade-up 0.8s ease-out forwards',
				'rotating-glow': 'rotating-glow 20s linear infinite',
				'count-glow': 'count-glow 2s ease-in-out infinite'
			},
			backgroundImage: {
				'grid': 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
				'grid-small': 'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
			}
		}
	},
	plugins: [tailwindcssAnimate, require("tailwindcss-animate")],
} satisfies Config;

export default config;
