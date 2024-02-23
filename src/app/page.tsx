import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section className="px-10 max-w-screen-xl mx-auto">
          <div className="h-svh pb-32 flex flex-col justify-around md:flex-row md:justify-between items-center text-center">
            <div>
              <div className="w-full relative max-w-lg">
                <div className="absolute top-0 -left-0 w-56 h-56 md:w-72 md:h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-20 w-56 h-56 md:w-72 md:h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute top-7 left-24 w-56 h-56 md:w-72 md:h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              </div>
              <h1 className="mt-16 text-xl font-light md:text-left">
                Welcome to <br />
                <span className="font-semibold text-4xl">Shorten URL</span>
              </h1>
            </div>
            <h2 className="mt-16 text-xl">
              Shorten URLs, Track Visits, Gain Insights
            </h2>
          </div>
        </section>
        <section className="bg-slate-200 p-16 rounded animate-on-scroll">
          <div className="px-10 max-w-screen-xl mx-auto">
            <p className="text-center">
              Are your URLs too long and difficult to share? Do you wish to
              monitor how many people are clicking on your links? Look no
              further!
              <span className="font-bold"> Shorten URL </span> is the ultimate
              URL shortening and tracking tool designed to streamline your links
              and provide insightful analytics.
            </p>
          </div>
        </section>
        <section className="mt-32 animate-on-scroll">
          <h2 className="text-center text-xl mb-8">Why Choose Shorten URL?</h2>
          <div className="flex flex-wrap gap-12 justify-center max-w-[1000px] mx-auto">
            <article className="w-64 h-[284px] card_rotate_animation">
              <div className="side front">
                <p className="text-5xl">🚀</p>
                <h3 className="mb-8"> URL Shortening Made Easy</h3>
                <p>Say goodbye to lengthy and cumbersome URLs.</p>
              </div>
              <div className="side back bg-orange-400">
                <p>
                  With Shorten URL, you can shorten your links in seconds,
                  making them concise, shareable, and visually appealing.
                </p>
              </div>
            </article>
            <article className="w-64 h-[284px] card_rotate_animation">
              <div className="side front">
              <p className="text-5xl">📊</p>
              <h3 className="mb-8">Real-Time Analytics</h3>
              <p>
                Curious about how your links are performing?
              </p>
              </div>
              <div className="side back bg-orange-400">
              <p>
                Our powerful analytics dashboard gives you real-time insights into the number of clicks, geographic locations, referral sources, and more. Understand your audience and optimize your strategy.
              </p>
              </div>
            </article>
            <article className="w-64 h-[284px] card_rotate_animation">
              <div className="side front">
              <p className="text-5xl">📈</p>
              <h3 className="mb-8">Comprehensive Data</h3>
              <p>
                Go beyond click counts.
              </p>
              </div>
              <div className="side back bg-orange-400">
                <p>
                  Shorten URL provides comprehensive data to help you analyze user behavior. Track unique clicks, conversion rates, and popular platforms, empowering you to make informed decisions.
                </p>
              </div>
            </article>
            <article className="w-64 h-[284px] card_rotate_animation">
              <div className="side front">
              <p className="text-5xl">🛡️</p>
              <h3 className="mb-8">Secure and Reliable</h3>
              <p>
                Rest easy knowing that your shortened URLs are secure and
                reliable.
              </p>
              </div>
              <div className="side back bg-orange-400">
                <p>
                  Our advanced infrastructure ensures the stability and availability of your links, with the option to set custom expiration dates for added control.
                </p>
              </div>
            </article>
            <article className="w-64 h-[284px] card_rotate_animation">
              <div className="side front">
              <p className="text-5xl">🔗</p>
              <h3 className="mb-8"> Custom Short URLs</h3>
              <p>
                Personalize your short URLs to enhance brand visibility.
              </p>
              </div>
              <div className="side back bg-orange-400">
              <p>
                Choose custom aliases that resonate with your audience, reinforcing your brand identity with every click.
              </p>
              </div>
            </article>
          </div>
        </section>
        <section className="max-w-screen-xl mt-32 animate-on-scroll mx-auto px-6">
          <h2 className="text-center text-xl mb-8">How It Works</h2>
          <article className="flex gap-4">
            <span className="text-5xl text-orange-400">1.</span>
            <div>
              <h3 className="text-xl font-semibold">Shorten Your URL</h3>
              <p>
                Paste your long URL into our user-friendly interface and watch
                it transform into a sleek, shortened link.
              </p>
            </div>
          </article>
          <article className="flex gap-4 mt-8">
            <span className="text-5xl text-blue-700">2.</span>
            <div>
              <h3 className="text-xl font-semibold">Share Instantly</h3>
              <p className="text-pretty">
                Copy the generated short link and share it effortlessly across
                platforms. No need to customize. Our tool instantly provides a
                concise and shareable URL for your convenience.
              </p>
            </div>
          </article>
          <article className="flex gap-4 mt-8">
            <span className="text-5xl text-red-600">3.</span>
            <div>
              <h3 className="text-xl font-semibold">
                Track Visits and Analytics
              </h3>
              <p className="text-pretty">
                Gain insights into your link&apos;s performance. Track the
                number of clicks, geographic locations, and visit dates. Our
                analytics dashboard provides a comprehensive overview of your
                link&apos;s engagement.
              </p>
            </div>
          </article>
        </section>
        <section className="mt-32 animate-on-scroll px-6">
          <h2 className="text-center text-xl mb-8">Get Started Today</h2>
          <div className="flex flex-col items-center gap-8">
            <p className="max-w-[600px] w-fit text-center text-pretty">
              Ready to elevate your link management game? Sign up for Shorten
              URL today and experience the power of simplified URL management
              and in-depth analytics.
            </p>
            <Link
              className="rounded-full border-2 border-orange-400 px-4 py-1 font-semibold hover:text-orange-400 hover:bg-slate-200 bg-orange-400 text-white active:translate-y-0.5"
              href="/api/auth/signin"
            >
              Sign up now
            </Link>
            <button className="rounded-full border-2 border-blue-700 px-4 py-1 font-semibold hover:text-blue-700 hover:bg-slate-200 bg-blue-700 text-white active:translate-y-0.5">
              Learn more
            </button>
          </div>
        </section>
        <section className="mt-32 animate-on-scroll">
          <h2 className="text-center text-xl mb-8">Trusted by Thousands</h2>
          <p className="max-w-[600px] w-fit text-center text-pretty mr-auto ml-auto">
            Join the growing community of marketers, businesses, and individuals
            who trust Shorten URL for their URL shortening and tracking needs.
            Discover the potential of every link.
          </p>
        </section>
        <section className="mt-32 animate-on-scroll">
          <h2 className="text-center text-xl mb-8">Contact Us</h2>
          <p className="text-center">
            Have questions or need assistance? Our support team is here to help.
            <br />
          </p>
          <div className="link-animation-on-hover w-fit mx-auto">
            <a className="text-red-600 font-semibold underline underline-offset-1 cursor-pointer">
              Contact support
            </a>
          </div>
          <h2 className="text-center mt-24">
            Unlock the full potential of your links with Shorten URL. Start
            shortening and tracking today!
          </h2>
        </section>
      </main>
    </>
  );
}
