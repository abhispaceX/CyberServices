import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {/* Enhanced background glow effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 w-3/4 h-3/4 bg-[#288170] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -right-1/4 -bottom-1/4 w-3/4 h-3/4 bg-[#288170] rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute left-1/4 bottom-1/4 w-1/2 h-1/2 bg-[#288170] rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute right-1/4 top-1/4 w-1/2 h-1/2 bg-[#288170] rounded-full opacity-10 blur-2xl"></div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden container mx-auto px-4 py-8 relative z-10">
        <header className="flex flex-col items-center mb-12">
          <div className="text-2xl font-bold tracking-wider mb-6">CYBER</div>
          <div className="text-sm text-gray-400 text-center mb-6">
            Cyber services based in<br />Hyderabad, India
          </div>
          <nav className="w-full">
            <ul className="flex flex-col space-y-4 items-center">
              <li className="text-sm">Services</li>
              <li className="w-full">
                <Button variant="outline" className="w-full border-[#288170] text-[#288170] hover:bg-[#288170] hover:text-white transition-colors text-sm py-2 rounded-full">
                  Get in touch
                </Button>
              </li>
            </ul>
          </nav>
        </header>

        <main className="text-center mt-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-2 h-2 bg-[#288170] rounded-full mr-2"></div>
            <span className="text-sm text-gray-400">Available for work</span>
          </div>

          <h1 className="text-4xl font-bold mb-6 leading-tight tracking-tight">
            We Are the Shield for Your Digital Assets
          </h1>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed">
            Need a security audit, real-time threat analysis, or a comprehensive security plan?
            We design and implement your cybersecurity solutions from start to finish.
          </p>

          <Button className="w-full bg-transparent hover:bg-[#288170] text-white border border-[#288170] hover:border-transparent transition-colors py-3 rounded-full text-sm">
            Get in touch
          </Button>
        </main>
        <div className="md:hidden container mx-auto px-4 py-8 relative z-10">
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            Empowering You with Reliable, Expert Services You Can Trust
          </h2>
          <img
            src="https://img.freepik.com/free-vector/cyber-security-concept_53876-93472.jpg?size=626&ext=jpg&ga=GA1.1.1281196119.1725015910&semt=ais_hybrid"
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

      {/* Desktop Layout */}
      <div className="hidden md:block container mx-auto px-6 py-12 relative z-10">
        <header className="flex justify-between items-center mb-24">
          <div className="text-3xl font-bold tracking-wider">CYBER</div>
          <div className="flex items-center space-x-12">
            <div className="text-sm text-gray-400">
              Cyber services based in<br />Hyderabad, India
            </div>
            <nav>
              <ul className="flex space-x-8 items-center">
                <li className="text-sm">Services</li>
                <li>
                  <Button variant="outline" className="border-[#288170] text-[#288170] hover:bg-[#288170] hover:text-white transition-colors text-sm px-6 py-2 rounded-full">
                    Get in touch
                  </Button>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main className="text-center mt-32">
          <div className="flex items-center justify-center mb-12">
            <div className="w-2 h-2 bg-[#288170] rounded-full mr-2"></div>
            <span className="text-sm text-gray-400">Available for work</span>
          </div>

          <h1 className="text-7xl font-bold mb-8 leading-tight tracking-tight">
            We Are the Shield for<br />Your Digital Assets
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Need a security audit, real-time threat analysis, or a comprehensive security plan?<br />
            We design and implement your cybersecurity solutions from start to finish.
          </p>

          <Button className="bg-transparent hover:bg-[#288170] text-white border border-[#288170] hover:border-transparent transition-colors px-10 py-3 rounded-full text-lg">
            Get in touch
          </Button>
        </main>
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
            <img
              src="/logoSecurity-removebg-preview.png"
              alt="Cyber Saviours Logo"
              width={400}
              height={400}
              className="max-w-full h-auto"
            />
          </div>
        </section>
      </div>
    </div>
  )
}