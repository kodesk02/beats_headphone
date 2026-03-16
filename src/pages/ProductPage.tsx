import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import Headphones from "../components/Headphones";
import { useCart } from "../components/CartProvider";
import { ShoppingCart, Check, ArrowRight, Info } from "lucide-react";

import type { Page, Variant } from "../types";

const variants: Variant[] = [
  {
    name: "Midnight",
    color: "#1a1a1a",
    gradient: "linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 50%, #0d0d0d 100%)",
    description:
      "Stealth black finish with matte texture for a professional look.",
  },
  {
    name: "Crimson",
    color: "#cc2200",
    gradient: "linear-gradient(135deg, #ff4d2e 0%, #cc2200 50%, #8a1500 100%)",
    description: "Bold crimson red that makes a statement wherever you go.",
  },
  {
    name: "Ocean",
    color: "#1a4bcc",
    gradient: "linear-gradient(135deg, #3d6ff5 0%, #1a4bcc 50%, #0d2d7a 100%)",
    description: "Deep ocean blue inspired by classic studio aesthetics.",
  },
  {
    name: "Pearl",
    color: "#f0f0f0",
    gradient: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #d4d4d4 100%)",
    description: "Clean, minimalist white that complements any style.",
  },
  {
    name: "Champagne",
    color: "#c8a84b",
    gradient: "linear-gradient(135deg, #e6d78a 0%, #c8a84b 50%, #9a7f2f 100%)",
    description: "Luxurious champagne gold for the discerning listener.",
  },
];

interface ProductPageProps {
  onNavigate: (page: Page) => void;
}

const ProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
  const [activeVariant, setActiveVariant] = useState<Variant>(variants[0]);
  const [isAdding, setIsAdding] = useState(false);
  const { addToCart, itemCount } = useCart();

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart(activeVariant, 349);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-x-hidden flex flex-col lg:flex-row">
      {/* Left Content Panel */}
      <div className="w-full lg:w-1/2 xl:w-1/3 min-h-screen lg:h-auto flex flex-col justify-center px-6 sm:px-8 lg:px-12 py-24 lg:py-12 z-10 relative order-2 lg:order-1">
        {/* Brand Tag */}
        <div className="mb-4 sm:mb-6">
          <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold tracking-widest uppercase rounded-full">
            New Release
          </span>
        </div>

        {/* Product Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-2">
          Beats
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">
            Studio Pro
          </span>
        </h1>

        {/* Dynamic Variant Name */}
        <div className="mt-6 sm:mt-8 mb-4 sm:mb-6">
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-2">
            Selected Finish
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
            <span
              className="w-6 h-6 rounded-full inline-block border-2 border-white shadow-lg flex-shrink-0"
              style={{ background: activeVariant.gradient }}
            />
            {activeVariant.name}
          </h2>
        </div>

        {/* Dynamic Description */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-sm">
          {activeVariant.description}
        </p>

        {/* Specs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            <span>Active Noise Cancelling</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            <span>40hr Battery Life</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            <span>Spatial Audio</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
            <span>USB-C Charging</span>
          </div>
        </div>

        {/* Color Selector */}
        <div>
          <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-3 sm:mb-4">
            Choose your finish
          </p>
          <div className="flex flex-wrap gap-3">
            {variants.map((v) => (
              <button
                key={v.name}
                onClick={() => setActiveVariant(v)}
                className={`group relative w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300 hover:scale-110 shadow-md flex-shrink-0
                  ${
                    activeVariant.name === v.name
                      ? "ring-2 ring-offset-1 sm:ring-offset-2 ring-gray-900 scale-110"
                      : "hover:ring-2 hover:ring-offset-2 hover:ring-gray-400"
                  }`}
                style={{ background: v.gradient }}
                title={v.name}
              >
                {activeVariant.name === v.name && (
                  <span className="absolute inset-0 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-md"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="mt-8 sm:mt-10 grid grid-cols-2 sm:flex sm:flex-row gap-3">
          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className={`col-span-2 sm:col-span-1 px-6 py-3 font-bold rounded-full transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2
      ${
        isAdding
          ? "bg-green-600 text-white"
          : "bg-gray-900 text-white hover:bg-gray-800"
      }`}
          >
            {isAdding ? (
              <Check className="w-5 h-5" />
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                <span>$349</span>
              </>
            )}
          </button>

          {/* Checkout */}
          {itemCount > 0 && (
            <button
              onClick={() => onNavigate("checkout")}
              className="col-span-1 px-4 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-full hover:bg-gray-900 hover:text-white transition-all flex items-center justify-center"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {/* Learn More */}
          <button className="col-span-1 px-4 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors flex items-center justify-center">
            <Info className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right 3D Canvas */}
      <div className="w-full lg:w-1/2 xl:w-2/3 h-[50vh] sm:h-[60vh] lg:h-auto lg:min-h-screen relative order-1 lg:order-2 sticky top-16 lg:top-0">
        {/* Dynamic Background Glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full blur-[80px] lg:blur-[120px] opacity-20 pointer-events-none transition-all duration-700"
          style={{ background: activeVariant.gradient }}
        />

        <Canvas
          camera={{ position: [4, 0, 5], fov: 60 }}
          className="touch-none"
        >
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <spotLight
            position={[-5, 5, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.8}
          />
          <Environment preset="studio" />

          <Center>
            <Headphones color={activeVariant.color} />
          </Center>

          <OrbitControls
            enableZoom={true}
            enablePan={false}
            enableDamping
            dampingFactor={0.05}
            minDistance={3}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* Floating hint */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-gray-400 text-xs sm:text-sm flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full">
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 animate-spin"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          <span className="hidden sm:inline">Drag to rotate</span>
          <span className="sm:hidden">Drag</span>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
