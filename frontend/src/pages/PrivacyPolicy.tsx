import { useEffect, useRef, useState } from 'react';
import { Navbar } from '../components/Navbar';

function PrivacyPolicy() {
    const [activeItem, setActiveItem] = useState(1);

    const contentRefs = useRef<HTMLDivElement[]>([]); // Update the type of contentRefs

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust this threshold based on your needs for when an item is considered active
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    const activeIndex = parseInt(entry.target.dataset.index || '1', 10);
                    setActiveItem(activeIndex);

                    console.log("activeIndex: ", activeIndex);

                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Start observing each content section
        contentRefs.current.forEach((ref: any) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        // Clean up the observer when the component unmounts
        return () => observer.disconnect();
    }, [contentRefs]);


    return (
        <div className="font-abc_normal bg-[#00000010] backdrop-blur-[13px]">
            <Navbar />
            <div className="text-[#222]">
                <div className=" max-w-[1440px] mx-auto">

                    {/* <div className="network__bg  h-48 fixed"></div>

                    <div className="flex justify-center">
                        <div className="radial__bg__color fixed"></div>
                    </div> */}

                    <div className="pt-[36px] px-5 md:px-12 lg:px-[112px] pb-32">
                        <div className="grid grid-cols-12 gap-x-7">
                            <div className="col-span-12 lg:col-span-8">

                                <h2 className="text-[24px] leading-[28px] md:text-[32px] md:leading-[36px] font-bold mb-4">Privacy Policy of Ethereum Address Checker</h2>

                                <p className="text-[16px] leading-[24px] md:text-[20px] md:leading-[30px] mb-8">Last updated: November 4th, 2023</p>

                                <div className="mb-8">
                                    We are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the personal data of our user.
                                </div>

                                <div id="policy1" ref={(ref: any) => contentRefs.current[0] = ref} data-index={1} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">1. Data Collection</h3>

                                    <p className="text-[14px] md:text-[16px]">1.1 User Information: We collect certain information necessary, this may include your name, email address, and other relevant data.</p>
                                </div>

                                <div id="policy2" ref={(ref: any) => contentRefs.current[1] = ref} data-index={2} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">2. Data Usage</h3>

                                    <p className="mb-4 text-[14px] md:text-[16px]">2.1 Services: We use the collected information to provide services within the app</p>
                                    <p className="text-[14px] md:text-[16px]">2.2 Communication: We may use your contact information to communicate important updates, announcements, and related information.</p>
                                </div>


                                <div id="policy3" ref={(ref: any) => contentRefs.current[2] = ref} data-index={3} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">3. Data Retention</h3>

                                    <p className="text-[14px] md:text-[16px]">3.1 We will retain your personal data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.</p>
                                </div>

                                <div id="policy4" ref={(ref: any) => contentRefs.current[3] = ref} data-index={4} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">4. Data Security</h3>

                                    <p className="text-[14px] md:text-[16px]">4.1 We implement industry-standard security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure, and we cannot guarantee the absolute security of your data.</p>
                                </div>

                                <div id="policy5" ref={(ref: any) => contentRefs.current[4] = ref} data-index={5} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">5. Data Sharing and Disclosure</h3>

                                    <p className="text-[14px] md:text-[16px]">5.1 We do not sell, trade, or rent your personal data to third parties. However, we may share your information with trusted third-party service providers who assist us in providing network infrastructure and operational support. These providers are obligated to handle your data securely and in accordance with applicable privacy laws.</p>
                                </div>

                                <div id="policy6" ref={(ref: any) => contentRefs.current[5] = ref} data-index={6} className="mb-8">
                                    <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">6. Changes to this Privacy Policy</h3>

                                    <p className="text-[14px] md:text-[16px]">7.1 We reserve the right to modify or update this Privacy Policy at any time. We will notify users of any material changes through the appropriate network channels. Your continued participation as a user after such modifications constitutes your acceptance of the revised Privacy Policy.</p>
                                </div>

                                {/* <div id="policy8" ref={(ref: any) => contentRefs.current[7] = ref} data-index={8} className="mb-8 text-[#EAF2F7]">
                  <h3 className="font-bold text-[16px] md:text-[24px] md:leadin-[32px] mb-4">8. Contact Us</h3>

                  <p className="mb-1 text-[14px] md:text-[16px]">8.1 If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:</p>
                  <p className="mb-1 text-[14px] md:text-[16px]">AlienChain</p>
                </div> */}
                            </div>


                            <div className="hidden lg:block col-span-4 fixed right-10 lg:right-20 top-44">
                                <h2 className="text-[12px] font-bold leading-[18px] tracking-[1.2px] mb-3 pl-4">ON THIS PAGE</h2>
                                <div className="text-[14px] leading-[22px]">
                                    <a onClick={() => setActiveItem(1)} href="#policy1" className={`mb-2 block pl-4 ${activeItem === 1 ? 'active-link !pl-3.5' : ''}`}>1. Data Collection</a>
                                    <a onClick={() => setActiveItem(2)} href="#policy2" className={`mb-2 block pl-4 ${activeItem === 2 ? 'active-link !pl-3.5' : ''}`}>2. Data Usage</a>
                                    <a onClick={() => setActiveItem(3)} href="#policy3" className={`mb-2 block pl-4 ${activeItem === 3 ? 'active-link !pl-3.5' : ''}`}>3. Data Retention</a>
                                    <a onClick={() => setActiveItem(4)} href="#policy4" className={`mb-2 block pl-4 ${activeItem === 4 ? 'active-link !pl-3.5' : ''}`}>4. Data Security</a>
                                    <a onClick={() => setActiveItem(5)} href="#policy5" className={`mb-2 block pl-4 ${activeItem === 5 ? 'active-link !pl-3.5' : ''}`}>5. Data Sharing and Disclosure</a>
                                    <a onClick={() => setActiveItem(6)} href="#policy6" className={`mb-2 block pl-4 ${activeItem === 6 ? 'active-link !pl-3.5' : ''}`}>6. Changes to this Privacy Policy</a>
                                    {/* <a onClick={() => setActiveItem(7)} href="#policy7" className={`mb-2 block pl-4 ${activeItem === 7 ? 'active-link !pl-3.5' : ''}`}>7. Changes to this Privacy Policy</a> */}
                                    {/* <a onClick={() => setActiveItem(8)} href="#policy8" className={`block pl-4 ${activeItem === 8 ? 'active-link !pl-3.5' : ''}`}>8. Contact Us</a> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default PrivacyPolicy;
