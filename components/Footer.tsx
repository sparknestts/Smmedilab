export default function Footer() {
    return (
        <footer className="bg-[#002b5c] text-white pt-20 pb-8 px-6 md:px-12 lg:px-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-black tracking-tight">SM Medical Lab</h3>
                        <p className="text-blue-100/70 text-base leading-relaxed">
                            Pioneering diagnostic excellence with a focus on accuracy, speed, and patient-centric innovation. Your health, our science.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                            </a>
                            <a href="#" className="bg-white/10 p-2.5 rounded-full hover:bg-white/20 transition-all">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-black uppercase tracking-widest text-blue-200">Services</h4>
                        <ul className="space-y-4 text-blue-100/70 font-medium">
                            <li><a href="/services" className="hover:text-white transition-colors">Blood Tests</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">DNA Analysis</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Corporate Wellness</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Health Packages</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Company */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-black uppercase tracking-widest text-blue-200">Company</h4>
                        <ul className="space-y-4 text-blue-100/70 font-medium">
                            <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Patient Portal</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-black uppercase tracking-widest text-blue-200">Contact</h4>
                        <ul className="space-y-4 text-blue-100/70 font-medium">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                care@smmedilab.com
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +1 (800) MED-LABS
                            </li>
                            <li className="flex items-start gap-3">
                                <svg className="w-5 h-5 text-blue-300 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                123 Diagnostic Ave, Biotech City
                            </li>
                        </ul>
                        <div className="flex items-center gap-3 pt-2">
                            {[
                                { name: 'fb', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                                { name: 'ig', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z M17.5 6.5h.01' },
                                { name: 'li', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z' },
                                { name: 'tw', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' }
                            ].map((icon) => (
                                <a key={icon.name} href="#" className="bg-white text-[#002b5c] p-2 rounded-full hover:bg-blue-200 hover:scale-110 transition-all">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        {icon.name === 'ig' ? (
                                            <>
                                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon.path} />
                                            </>
                                        ) : (
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon.path} />
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-blue-100/50 text-sm font-medium">
                        &copy; {new Date().getFullYear()} SM Medical Lab. Clinical Precision & Editorial Grace.
                    </p>
                    <div className="flex items-center gap-8 text-blue-100/50 text-sm font-bold">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
