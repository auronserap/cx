"use client";
import { useState } from "react";

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

export default function DashboardPage() {
  const [config, setConfig] = useState<SparklesConfig>({
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
  });

  const handleConfigChange = (
    type: keyof SparklesConfig,
    field: "title" | "subtitle",
    value: string
  ) => {
    setConfig((prev) => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value,
      },
    }));
  };

  const handleSave = () => {
    // LocalStorage'a kaydet
    localStorage.setItem("sparklesConfig", JSON.stringify(config));
    alert("Ayarlar kaydedildi! Ana sayfayı yenileyerek değişiklikleri görebilirsiniz.");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Sparkles Dashboard</h1>
        
        <div className="space-y-8">
          {/* Basic Sparkles */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Basic Sparkles</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Başlık
                </label>
                <input
                  type="text"
                  value={config.basic.title}
                  onChange={(e) => handleConfigChange("basic", "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Başlık
                </label>
                <input
                  type="text"
                  value={config.basic.subtitle}
                  onChange={(e) => handleConfigChange("basic", "subtitle", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Dark Sparkles */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Dark Sparkles</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Başlık
                </label>
                <input
                  type="text"
                  value={config.dark.title}
                  onChange={(e) => handleConfigChange("dark", "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Başlık
                </label>
                <input
                  type="text"
                  value={config.dark.subtitle}
                  onChange={(e) => handleConfigChange("dark", "subtitle", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Colorful Sparkles */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Colorful Sparkles</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Başlık
                </label>
                <input
                  type="text"
                  value={config.colorful.title}
                  onChange={(e) => handleConfigChange("colorful", "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Alt Başlık
                </label>
                <input
                  type="text"
                  value={config.colorful.subtitle}
                  onChange={(e) => handleConfigChange("colorful", "subtitle", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 