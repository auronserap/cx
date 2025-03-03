"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

interface SparklesTextProps {
  title?: string;
  subtitle?: string;
}

export function SparklesPreview({ title = "Hoş Geldiniz", subtitle }: SparklesTextProps) {
  return (
    <div className="w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/80 mt-4 text-center relative z-20">
          {subtitle}
        </p>
      )}
      <div className="w-full h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}

export function SparklesPreviewDark({ title = "Merhaba Dünya", subtitle }: SparklesTextProps) {
  return (
    <div className="w-full h-full relative bg-slate-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
          speed={1}
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        {title}
      </h1>
      {subtitle && (
        <p className="text-white/80 mt-4 text-center relative z-20">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function SparklesPreviewColorful({ title = "Geleceğe Hoş Geldiniz", subtitle = "Yarının dünyasını bugünden keşfedin" }: SparklesTextProps) {
  return (
    <div className="w-full h-full relative bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full absolute inset-0">
        <SparklesCore
          id="tsparticlescolorful"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#00ff00"
          speed={0.5}
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 relative z-20">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          {title}
        </h1>
        {subtitle && (
          <p className="text-neutral-300 cursor-default text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
} 