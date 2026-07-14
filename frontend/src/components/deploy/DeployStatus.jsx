function DeployStatus() {
  return (
    <div className="bg-slate-900 rounded-xl p-6 mt-8 shadow-lg">

      <h2 className="text-xl font-bold text-white mb-4">
        Deployment Status
      </h2>

      <div className="bg-slate-800 rounded-lg p-4">

        <p className="text-yellow-400 font-semibold">
          ⏳ Waiting for deployment...
        </p>

        <p className="text-gray-400 mt-2">
          Fill the deployment form and click
          <span className="text-cyan-400"> Deploy Application </span>
          to start provisioning infrastructure.
        </p>

      </div>

    </div>
  );
}

export default DeployStatus;