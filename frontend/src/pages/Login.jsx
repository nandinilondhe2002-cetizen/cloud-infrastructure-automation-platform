function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex">

      {/* Left Side */}
      <div className="w-1/2 flex flex-col justify-center items-center p-12">

        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Cloud Infrastructure
        </h1>

        <h2 className="text-4xl font-bold text-white mb-8">
          Automation Platform
        </h2>

        <p className="text-gray-400 text-center text-lg leading-8">
          Automate your cloud deployments with
          <br />
          AWS, Docker, Kubernetes,
          <br />
          Ansible and GitHub Actions.
        </p>

      </div>

      {/* Right Side */}

      <div className="w-1/2 flex justify-center items-center">

        <div className="bg-slate-900 p-10 rounded-2xl shadow-2xl w-[430px]">

          <h2 className="text-3xl text-white font-bold mb-8">
            Welcome Back 👋
          </h2>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-800 text-white mb-5 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-800 text-white mb-6 outline-none"
          />

          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg font-semibold transition">
            Login
          </button>

        </div>

      </div>

    </div>
  );
}

export default Login;