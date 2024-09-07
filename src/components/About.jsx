import { Button } from "./ui/button"
import Image from "next/image"

export default function Component() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 bg-[#288170] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 bg-[#288170] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-1/2 h-1/2 bg-[#288170] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute right-1/4 top-1/4 w-1/2 h-1/2 bg-[#288170] rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden container mx-auto px-4 py-8 relative z-10">
        {/* Previous mobile content (unchanged) */}
        {/* ... */}
      </div>

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-6 py-12 relative z-10">
        {/* Previous desktop content (unchanged) */}
        {/* ... */}

        {/* New Services Section */}
        <section className="mt-32 flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              Empowering You with<br />
              Reliable, Expert Services<br />
              You Can Trust
            </h2>
            <ul className="space-y-8">
              <li>
                <h3 className="text-[#288170] text-xl font-semibold mb-2">Threat-Proof Solutions</h3>
                <p className="text-gray-400">
                  Our defense mechanisms are in a constant state of evolution, ensuring an impenetrable shield against emerging cyber threats.
                </p>
              </li>
              <li>
                <h3 className="text-[#288170] text-xl font-semibold mb-2">Cutting-edge Defense</h3>
                <p className="text-gray-400">
                  We continuously pioneer new approaches to strengthen your digital defenses, with the latest innovations in cybersecurity.
                </p>
              </li>
              <li>
                <h3 className="text-[#288170] text-xl font-semibold mb-2">Dynamic Security Solutions</h3>
                <p className="text-gray-400">
                  With a focus on continual improvement, we offer dynamic security solutions that adapt and evolve alongside evolving cyber risks.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/logoCyber.png"
              alt="Cyber Saviours Logo"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </div>

      {/* Mobile Services Section */}
      <div className="md:hidden container mx-auto px-4 py-8 relative z-10">
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Empowering You with Reliable, Expert Services You Can Trust
          </h2>
          <Image
            src="/logoCyber.png"
            alt="Cyber Saviours Logo"
            width={300}
            height={300}
            className="max-w-full h-auto mx-auto mb-8"
          />
          <ul className="space-y-6">
            <li>
              <h3 className="text-[#288170] text-lg font-semibold mb-2">Threat-Proof Solutions</h3>
              <p className="text-gray-400 text-sm">
                Our defense mechanisms are in a constant state of evolution, ensuring an impenetrable shield against emerging cyber threats.
              </p>
            </li>
            <li>
              <h3 className="text-[#288170] text-lg font-semibold mb-2">Cutting-edge Defense</h3>
              <p className="text-gray-400 text-sm">
                We continuously pioneer new approaches to strengthen your digital defenses, with the latest innovations in cybersecurity.
              </p>
            </li>
            <li>
              <h3 className="text-[#288170] text-lg font-semibold mb-2">Dynamic Security Solutions</h3>
              <p className="text-gray-400 text-sm">
                With a focus on continual improvement, we offer dynamic security solutions that adapt and evolve alongside evolving cyber risks.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}