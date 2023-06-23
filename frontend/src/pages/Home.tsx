import React, { Fragment } from 'react'
import { DownloadBtn } from '../components/core'
import { Navbar } from '../components/Navbar'

const Home = () => {
    return (
        <Fragment>
            <div className="font-mono min-h-screen">
                <Navbar />

                <div className="bg-[#00000010] min-h-screen">
                    <div className="bg-white pb-20">
                        <div className="grid lg:grid-cols-2 px-6 md:px-14 gap-8 md:gap-12 lg:gap-24 mt-16 md:mt-24 max-w-[1440px] mx-auto">
                            <div className="lg:mt-20 tracking-tighter">
                                <h1 className="text-center lg:text-left text-[26px] leading-[30px] md:text-[40px] md:leading-[54px] font-semibold lg:max-w-[500px] tracking-tight">
                                    The Perfect Tool for DApp Developers, Cryptocurrency Traders,
                                    and Ethereum Enthusiasts
                                </h1>

                                <p className="mt-4 text-center lg:text-left tracking-tight">
                                    Introducing the Ultimate Ethereum Address Validator! Easily
                                    Identify Ethereum Addresses with One Click
                                </p>
                                <p className="mt-2 text-center lg:text-left tracking-tight">
                                    Are you tired of not knowing whether an Ethereum address is an
                                    Externally Owned Account (EOA) or a Contract Account? Look no
                                    further, because the Address Checker browser extension has got
                                    you covered! With just one click, you can quickly and easily
                                    determine the type of Ethereum address you are dealing with.
                                </p>
                            </div>

                            <div className="w-[100%] lg:w-[80%] mx-auto h-[350px] md:h-[600px]">
                                <img src="/ext.png" alt="logo" className="h-full w-full" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white pb-20">
                        <div className="grid lg:grid-cols-2 px-6 md:px-14 gap-8 md:gap-12 lg:gap-24 lg:pt-24 max-w-[1440px] mx-auto">
                            <div className="lg:mt-20 tracking-tighter">
                                <h1 className="text-center lg:text-left text-[24px] leading-[28px] md:text-[32px] md:leading-[44px] font-semibold lg:max-w-[500px] tracking-tight">
                                    User-Friendly, Efficient, and Completely Free
                                </h1>

                                <p className="mt-4 text-center lg:text-left tracking-tight">
                                    Get the EOA Verifier browser extension today and experience
                                    the power of Ethereum address classification at your
                                    fingertips!
                                </p>
                                <p className="mt-2 text-center lg:text-left tracking-tight">
                                    Whether you are a cryptocurrency trader, a decentralized
                                    application developer, or simply interested in the Ethereum
                                    ecosystem, the EOA Verifier is the perfect tool for you. It is
                                    user-friendly, efficient, and completely free. Say goodbye to
                                    manual address classification and hello to a hassle-free
                                    experience.
                                </p>
                            </div>

                            <div className="w-[100%] h-[350px] md:h-[500px]">
                                <img
                                    src="/eth.webp"
                                    alt="logo"
                                    className="h-full w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white pb-20">
                        <div className="grid lg:grid-cols-2 px-6 md:px-14 gap-8 md:gap-12 lg:gap-24 lg:pt-24 max-w-[1440px] mx-auto">
                            <div className="w-[100%] h-[350px] md:h-[500px] hidden lg:block">
                                <img
                                    src="/third.jpeg"
                                    alt="logo"
                                    className="h-full w-full rounded-2xl"
                                />
                            </div>
                            <div className="lg:mt-20 tracking-tighter">
                                <h1 className="text-center lg:text-left text-[24px] leading-[28px] md:text-[32px] md:leading-[44px] font-semibold lg:max-w-[500px] tracking-tight">
                                    Not convinced yet?
                                </h1>

                                {/* <p className="mt-4 text-center lg:text-left tracking-tight">
                  The Ultimate Ethereum Address Validator browser extension is
                  an essential tool for anyone who uses Ethereum. With its
                  ability to quickly and easily identify Ethereum addresses as
                  either an externally owned account (EOA) or a contract
                  account, it helps combat the potential security issue of
                  sending funds to a malicious contract address.
                </p> */}
                                <p className="mt-4 text-center lg:text-left tracking-tight">
                                    In the past, users may have accidentally sent funds to
                                    contract addresses that trigger malicious functions, leading
                                    to security problems such as lost funds or unintended actions.
                                    With the Ultimate Ethereum Address Validator, you can avoid
                                    this pitfall by having accurate, real-time information about
                                    the type of address before you send funds.
                                </p>
                                <p className="mt-2 text-center lg:text-left tracking-tight">
                                    Our extension provides a crucial layer of security for your
                                    Ethereum transactions by alerting you to the potential risks
                                    of sending funds to a contract address. Whether you're a
                                    seasoned Ethereum user or just starting out, the Ultimate
                                    Ethereum Address Validator is an essential tool for
                                    safeguarding your funds and ensuring peace of mind with every
                                    transaction.
                                </p>
                                {/* <p className="mt-2 text-center lg:text-left tracking-tight">
                  So why wait? Get the Ultimate Ethereum Address
                  Validator today and start enjoying the peace of mind that
                  comes from knowing you're sending funds to the right place
                  every time. Try it now and see the difference it makes!
                </p> */}
                            </div>

                            <div className="w-[100%] h-[350px] md:h-[500px] lg:hidden">
                                <img
                                    src="/third.jpeg"
                                    alt="logo"
                                    className="h-full w-full rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="py-24">
                        <div className="max-w-[1440px] mx-auto text-center">
                            <h2 className="text-[24px] font-semibold mb-5 tracking-tighter">
                                Get Started
                            </h2>

                            <DownloadBtn />
                        </div>
                    </div>

                    {/* <p className="text-center border-y border-[#00000015] py-8 px-4 tracking-tighter">
            Built and Developed by{" "}
            <a
              href="https://twitter.com/LongsTheGuy"
              target={"_blank"}
              rel={"noopenner norefferer"}
              className="text-blue_deep underline"
            >
              Devlongs
            </a>{" "}
            and{" "}
            <a
              href="https://twitter.com/_abiodunAwoyemi"
              target={"_blank"}
              rel={"noopenner norefferer"}
              className="text-blue_deep underline"
            >
              Abiodun
            </a>
          </p>
        */}
                </div>
            </div>
        </Fragment>
    )
}

export default Home