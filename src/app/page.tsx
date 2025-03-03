"use client";
import { useState, useEffect } from "react";
import { SparklesPreview, SparklesPreviewDark, SparklesPreviewColorful } from "@/components/demo/sparkles";
import Link from "next/link";

interface SparklesConfig {
  basic: {
    title: string;
    subtitle: string;
  };
  dark: {
    title: string;
    subtitle: string;
  };
  colorful: {
    title: string;
    subtitle: string;
  };
}

const defaultConfig: SparklesConfig = {
  basic: {
    title: "Next.js Dünyası",
    subtitle: "Modern web geliştirmenin geleceği burada başlıyor",
  },
  dark: {
    title: "Kodlama Zamanı",
    subtitle: "Hayallerinizi gerçeğe dönüştürün",
  },
  colorful: {
    title: "Yenilikçi Tasarım",
    subtitle: "Sınırları zorlamaya hazır mısınız?",
  },
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<'basic' | 'dark' | 'colorful'>('basic');
  const [config, setConfig] = useState<SparklesConfig>(defaultConfig);

  useEffect(() => {
    // LocalStorage'dan config'i oku
    const savedConfig = localStorage.getItem("sparklesConfig");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  return (
    <main className="w-full h-screen flex flex-col">
      {/* Tabs */}
      <div className="flex justify-between items-center p-4 bg-black/20 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('basic')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'basic'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/40'
            }`}
          >
            Basic
          </button>
          <button
            onClick={() => setActiveTab('dark')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'dark'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/40'
            }`}
          >
            Dark
          </button>
          <button
            onClick={() => setActiveTab('colorful')}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === 'colorful'
                ? 'bg-white text-black'
                : 'bg-black/30 text-white hover:bg-black/40'
            }`}
          >
            Colorful
          </button>
        </div>

        <Link
          href="/dashboard"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Dashboard
        </Link>
      </div>

      {/* Content */}
      <div className="w-full h-full">
        {activeTab === 'basic' && (
          <SparklesPreview 
            title={config.basic.title}
            subtitle={config.basic.subtitle}
          />
        )}
        {activeTab === 'dark' && (
          <SparklesPreviewDark 
            title={config.dark.title}
            subtitle={config.dark.subtitle}
          />
        )}
        {activeTab === 'colorful' && (
          <SparklesPreviewColorful 
            title={config.colorful.title}
            subtitle={config.colorful.subtitle}
          />
        )}
      </div>
    </main>
  );
}
