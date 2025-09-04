import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const handleStartChatting = () => {
    // This will be replaced with actual navigation in your app
    navigate("/join");
  };

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <div onClick={()=>navigate("/")}  className="cursor-pointer relative text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            FlashTalk
            <span className="absolute left-0 -bottom-1 w-0 h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
          </div>

          {/* Optional nav items */}
          <div className="hidden  md:flex gap-6 text-white/70 font-semibold">
            <a
              href="#features"
              className="hover:text-white transition-colors duration-300"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-white transition-colors duration-300"
            >
              How it works
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Temporary Chat Rooms
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              That Disappear
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            No accounts, no history, no traces. Just pure conversation that
            vanishes when everyone leaves.
          </p>

          {/* CTA Button */}
          <button
            onClick={handleStartChatting}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 ease-out bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500/50 shadow-lg hover:shadow-xl"
          >
            <span className="relative z-10 flex items-center">
              Start Chatting
              <svg
                className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </button>
        </div>

        {/* Features Grid */}
        <div
          id="features"
          className="grid md:grid-cols-3 gap-8 mt-24 max-w-5xl mx-auto"
        >
          {/* Feature 1 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Instant Rooms</h3>
              <p className="text-gray-400 leading-relaxed">
                Create or join chat rooms instantly. No waiting, no setup
                required. Just enter a room name and start talking.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">No Registration</h3>
              <p className="text-gray-400 leading-relaxed">
                Skip the signup forms and email verification. Just pick a
                username and jump straight into conversations.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-2xl blur-xl transition-all duration-300 group-hover:blur-lg"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Complete Privacy</h3>
              <p className="text-gray-400 leading-relaxed">
                Your conversations disappear forever when everyone leaves the
                room. No data storage, no chat logs, no traces.
              </p>
            </div>
          </div>
        </div>

        {/* How it works */}
        <div id="how-it-works" className="mt-32 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Choose a room name</h3>
              <p className="text-gray-400">
                Pick any room name you want. If it doesn't exist, we'll create
                it instantly.
              </p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">Start chatting</h3>
              <p className="text-gray-400">
                Share the room name with friends or chat with whoever's already
                there.
              </p>
            </div>
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Leave anytime</h3>
              <p className="text-gray-400">
                When everyone leaves, the room and all messages vanish
                completely.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
  id="contact"
  className="relative z-10 border-t border-white/20 py-2 bg-gray-900"
>
  <div className="max-w-7xl mx-auto px-6 text-center">
    <p className="text-gray-400 mb-2">
      Built for temporary conversations • No data stored • Complete privacy
    </p>
    <p className="text-gray-300 font-semibold">
      © {new Date().getFullYear()} VardhanNP
    </p>
    
  </div>
</div>

    </div>
  );
};

export default LandingPage;
