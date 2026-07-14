function DeployForm({ formData, setFormData }) {
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-slate-900 rounded-xl p-8 shadow-lg">

      <h2 className="text-2xl font-bold text-white mb-8">
        🚀 Create New Deployment
      </h2>

      <div className="grid grid-cols-2 gap-6">

        {/* Project Name */}
        <div>
          <label className="block text-gray-300 mb-2">
            Project Name
          </label>

          <input
            type="text"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            placeholder="My Banking App"
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* GitHub Repository */}
        <div>
          <label className="block text-gray-300 mb-2">
            GitHub Repository
          </label>

          <input
            type="text"
            name="repository"
            value={formData.repository}
            onChange={handleChange}
            placeholder="https://github.com/user/project"
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-400"
          />
        </div>

        {/* Application Type */}
        <div>
          <label className="block text-gray-300 mb-2">
            Application Type
          </label>

          <select
            name="applicationType"
            value={formData.applicationType}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700"
          >
            <option value="React">React</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
            <option value="Java">Java</option>
          </select>
        </div>

        {/* Deployment Template */}
        <div>
          <label className="block text-gray-300 mb-2">
            Deployment Template
          </label>

          <select
            name="template"
            value={formData.template}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700"
          >
            <option value="Docker Application">
              Docker Application
            </option>

            <option value="Kubernetes Cluster">
              Kubernetes Cluster
            </option>
          </select>
        </div>

        {/* AWS Region */}
        <div>
          <label className="block text-gray-300 mb-2">
            AWS Region
          </label>

          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700"
          >
            <option value="ap-south-1">
              ap-south-1 (Mumbai)
            </option>

            <option value="us-east-1">
              us-east-1
            </option>

            <option value="eu-west-1">
              eu-west-1
            </option>
          </select>
        </div>

        {/* EC2 Instance */}
        <div>
          <label className="block text-gray-300 mb-2">
            EC2 Instance
          </label>

          <select
            name="instance"
            value={formData.instance}
            onChange={handleChange}
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700"
          >
            <option value="t2.micro">
              t2.micro
            </option>

            <option value="t3.micro">
              t3.micro
            </option>

            <option value="t3.small">
              t3.small
            </option>
          </select>
        </div>

      </div>

    </div>
  );
}

export default DeployForm;