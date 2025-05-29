import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useState } from 'react';
import { Eye, BookHeart, User, Sparkles, Star, Moon, Twitter, Facebook, Instagram, Menu, X, HelpCircle, Feather, Key, Zap } from 'lucide-react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick?: () => void }> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-gray-400 hover:text-red-600 transition duration-300 ease-in-out text-sm font-medium uppercase tracking-widest hover:shadow-red-600/50 hover:shadow-sm px-3 py-2 rounded-sm"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <header className="bg-black/60 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-900/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <a href="#" className="text-xl font-serif text-white tracking-widest flex items-center group">
                           <Eye size={20} className="text-red-700 mr-3 group-hover:animate-pulse"/>
                           THE <span className="text-red-700 font-bold mx-1">ORACLE</span> WITHIN
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <nav className="flex items-center space-x-6">
                            <NavLink href="#glimpse">A Glimpse</NavLink>
                            <NavLink href="#journey">The Journey</NavLink>
                            <NavLink href="#whispers">Whispers</NavLink>
                            <a
                                href="#threshold"
                                className="bg-red-700 text-white px-5 py-2 rounded-sm border-2 border-red-700 hover:bg-black hover:text-red-600 transition duration-300 ease-in-out text-xs font-bold uppercase tracking-wider shadow-lg shadow-red-800/30 flex items-center"
                            >
                                <Key size={14} className='mr-2'/>
                                Unlock Now
                            </a>
                        </nav>
                    </div>
                    <div className="md:hidden">
                         <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-400 hover:text-red-600 focus:outline-none p-2"
                         >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
             {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden border-t border-gray-900/50 bg-black/95`}>
                <nav className="px-4 pt-4 pb-6 space-y-5 flex flex-col items-center">
                    <NavLink href="#glimpse" onClick={closeMenu}>A Glimpse</NavLink>
                    <NavLink href="#journey" onClick={closeMenu}>The Journey</NavLink>
                    <NavLink href="#whispers" onClick={closeMenu}>Whispers</NavLink>
                    <a
                        href="#threshold"
                        onClick={closeMenu}
                        className="bg-red-700 text-white px-6 py-3 rounded-sm border-2 border-red-700 hover:bg-black hover:text-red-600 transition duration-300 ease-in-out text-sm font-medium uppercase tracking-wider shadow-lg shadow-red-800/30 w-full text-center flex items-center justify-center"
                    >
                         <Key size={16} className='mr-2'/>
                         Unlock Now
                    </a>
                </nav>
            </div>
        </header>
    );
};

const HeroSection: React.FC = () => (
  <section className="bg-black text-white min-h-[80vh] md:min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
      {/* Background Mystic Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(153,27,27,0.2),_rgba(0,0,0,0)_60%)] animate-pulse"></div>
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-red-700 rounded-full animate-ping delay-100"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-red-700 rounded-full animate-ping delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-500"></div>
          <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
      </div>
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative text-center">
        <div className="text-8xl md:text-9xl font-serif text-red-800/60 opacity-30 mb-4 select-none">?</div>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-gray-100 -mt-16 md:-mt-24">
            The Deepest Answers Lie 
            <span className="text-red-700 block">Within a Question.</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-xl mx-auto">
            This is not merely a book. It is an echo chamber for your soul, a mystic key to unlock the universe you carry inside. Are you brave enough to listen?
        </p>
        <a
            href="#glimpse"
            className="inline-flex items-center bg-transparent text-red-600 px-10 py-3 rounded-sm border-2 border-red-600 hover:bg-red-600 hover:text-white transition duration-300 ease-in-out text-lg font-bold uppercase tracking-wider shadow-lg shadow-red-700/20 group"
        >
            <Zap className="mr-3 h-5 w-5 group-hover:animate-bounce" />
            Dare to Glimpse
        </a>
    </div>
  </section>
);

const SampleQuestion: React.FC = () => {
    const [revealed, setRevealed] = useState(false);
    const question = "If your shadow could speak, what secret would it tell?";

    return (
        <section id="glimpse" className="bg-gray-950 text-white py-20 md:py-32 border-t border-b border-gray-900/50 relative">
             <div className="absolute top-10 right-10 text-7xl font-serif text-red-900/20 opacity-50 select-none hidden md:block">?</div>
             <div className="absolute bottom-10 left-10 text-7xl font-serif text-red-900/20 opacity-50 select-none hidden md:block">?</div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-6">
                    A <span className="text-red-700">Glimpse</span> Beyond the Veil
                </h2>
                <p className="text-gray-400 mb-12 max-w-lg mx-auto">
                    The Oracle speaks in whispers and riddles. It does not offer easy answers, but guides you to your own profound truths. Here is a taste:
                </p>
                <div className={`bg-black border-2 ${revealed ? 'border-red-700/80' : 'border-gray-800'} p-8 md:p-12 rounded-lg shadow-2xl shadow-black/50 max-w-2xl mx-auto min-h-[15rem] flex items-center justify-center transition-all duration-700 ease-in-out`}>
                    {!revealed ? (
                        <button
                            onClick={() => setRevealed(true)}
                            className="bg-gray-800 text-white px-8 py-3 rounded-sm border border-gray-700 hover:bg-red-700 hover:border-red-700 transition duration-300 ease-in-out text-lg font-medium tracking-wider group flex items-center"
                        >
                           <Eye size={20} className='mr-3 group-hover:scale-110'/> Reveal a Question
                        </button>
                    ) : (
                        <p className="text-2xl md:text-3xl font-serif italic text-gray-200 animate-fadeIn">
                           “{question}”
                        </p>
                    )}
                </div>
                 <p className="text-gray-600 mt-8 text-sm">
                    {revealed ? "Reflect upon this. The book holds many more keys..." : "Click the button to receive your first query."}
                </p>
            </div>
        </section>
    );
}

const JourneySection: React.FC = () => (
  <section id="journey" className="bg-black text-white py-20 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-16">
        Chart Your <span className="text-red-700">Inner Cosmos</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <div className="md:w-1/2">
            <div className="bg-gray-950 p-8 rounded-lg border border-gray-800 shadow-lg shadow-black/20 relative overflow-hidden">
                 <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-red-800/30 rounded-full opacity-30 -z-10"></div>
                <h3 className="text-2xl font-semibold text-red-700 mb-4 flex items-center">
                    <Moon className="mr-3 h-6 w-6" /> The Path Unfolds
                </h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                    'The Oracle Within' is structured as a spiral path, leading you deeper into your own psyche. It's divided into realms – The Echoing Caverns of Memory, The Sunken City of Dreams, The Obsidian Peaks of Fear, and The Star-Woven Fields of Potential.
                </p>
                <p className="text-gray-400 leading-relaxed">
                    Each question is a stepping stone. There are no right or wrong answers, only your truth, waiting to be acknowledged. This journey requires courage, honesty, and an open heart.
                </p>
            </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64 bg-black border-4 border-red-900/50 rounded-full flex items-center justify-center text-center p-8 shadow-2xl shadow-red-950/30 relative">
                <HelpCircle size={80} className="text-red-700 opacity-60 absolute animate-pulse"/>
                <p className='text-gray-500 z-10 italic'>“The only journey is the one within.”</p>
            </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialCard: React.FC<{ quote: string; author: string; }> = ({ quote, author }) => (
    <div className="bg-black p-6 rounded-lg border border-gray-800/70 shadow-lg transform transition duration-300 hover:border-red-700/70 hover:shadow-red-900/20 relative group">
        <div className='absolute top-3 left-3 text-5xl font-serif text-red-900/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300'>“</div>
        <p className="text-gray-300 italic mb-6 text-lg pt-8 pl-4">{quote}”</p>
        <p className="text-red-700 font-semibold text-right">~ {author}</p>
    </div>
);

const ReviewsSection: React.FC = () => (
    <section id="whispers" className="bg-gray-950 text-white py-20 md:py-24 border-t border-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-center mb-16">
                Echoes from <span className="text-red-700">Fellow Seekers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <TestimonialCard 
                    quote="It felt like the book was reading me. Uncannily insightful and deeply moving."
                    author="R. Vale"
                />
                <TestimonialCard 
                    quote="I thought I knew myself... 'The Oracle Within' showed me how much more there was to discover. A profound tool."
                    author="J. Finch"
                />
                <TestimonialCard 
                    quote="Not an easy journey, but an essential one. It helped me find clarity in the chaos."
                    author="M. Solace"
                />
            </div>
        </div>
    </section>
);

const CtaSection: React.FC = () => (
    <section id="threshold" className="bg-black text-white py-20 md:py-32 relative">
         <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2252%22%20height%3D%2252%22%20viewBox%3D%220%200%2052%2052%22%3E%3Cpath%20fill%3D%22%23991b1b%22%20fill-opacity%3D%220.3%22%20d%3D%22M0%2010h52v2H0v-2zm0%2020h52v2H0v-2zm0%2020h52v2H0v-2zM10%200v52h2V0h-2zm20%200v52h2V0h-2zm20%200v52h2V0h-2z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E')] mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
            <div className="bg-gray-950/70 backdrop-blur-sm p-10 md:p-16 rounded-lg border-t-2 border-red-800/60 shadow-2xl shadow-red-950/60 text-center">
                <Feather size={40} className='text-red-700 mx-auto mb-6 opacity-80'/>
                <h2 className="text-3xl sm:text-5xl font-serif font-bold mb-4">Cross the Threshold.</h2>
                <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                    The Oracle has extended its invitation. The questions are waiting. Your inner world is ready to be explored. Will you answer the call?
                </p>
                <a
                    href="#"
                    className="inline-flex items-center bg-red-700 text-white px-12 py-4 rounded-sm border-2 border-red-700 hover:bg-black hover:text-red-600 transition duration-300 ease-in-out text-xl font-bold uppercase tracking-widest shadow-lg shadow-red-800/50 group"
                >
                    <Key className="mr-4 h-6 w-6 group-hover:rotate-12 transition-transform" />
                    Begin Your Journey Now
                </a>
                 <p className='text-gray-600 mt-6 text-sm'>Available in Limited Edition Hardcover & Digital Format.</p>
            </div>
        </div>
    </section>
);

const Footer: React.FC = () => (
    <footer className="bg-black text-gray-700 py-6 border-t border-gray-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="#" className="text-gray-700 hover:text-red-700 transition duration-300"><Twitter size={18} /></a>
                <a href="#" className="text-gray-700 hover:text-red-700 transition duration-300"><Instagram size={18} /></a>
            </div>
            <p className="text-xs tracking-wider opacity-60">
                &copy; {new Date().getFullYear()} The Oracle Within. All Mysteries Reserved.
            </p>
        </div>
    </footer>
);


const MysticBookLandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Oracle Within - Dare to Ask?</title>
        <meta name="description" content="An original, mystic questionnaire book to explore the universe within yourself. Are you ready to ask the questions?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-black font-sans antialiased selection:bg-red-900 selection:text-white">
        <Header />
        <main>
            <HeroSection />
            <SampleQuestion />
            <JourneySection />
            <ReviewsSection />
            <CtaSection />
        </main>
        <Footer />
      </div>
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-in-out forwards;
        }
      `}</style>
    </>
  );
};

export default MysticBookLandingPage;
