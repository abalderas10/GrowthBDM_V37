import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroSection from '@/components/HeroSection';

const GrowthDeveloper = dynamic(() => import('@/components/GrowthDeveloper'), { ssr: false });
const ExpansionStrategies = dynamic(() => import('@/components/ExpansionStrategies'), { ssr: false });
const GrowthAI = dynamic(() => import('@/components/GrowthAI'), { ssr: false });
const AliEstGrowth = dynamic(() => import('@/components/AliEstGrowth'), { ssr: false });
const StrategicAlliances = dynamic(() => import('@/components/StrategicAlliances'), { ssr: false });
const BlogSection = dynamic(() => import('@/components/BlogSection'), { ssr: false });
const CTASection = dynamic(() => import('@/components/CTASection'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroSection />
        <GrowthDeveloper />
        <ExpansionStrategies />
        <GrowthAI />
        <AliEstGrowth />
        <StrategicAlliances />
        <BlogSection />
        <CTASection />
      </Suspense>
    </main>
  );
}