import api from "../../services/api";

function DeployButton({ formData }) {

  const handleDeploy = async () => {

    // Basic Validation
    if (!formData.projectName || !formData.repository) {
      alert("Please fill all required fields.");
      return;
    }

    try {

      const response = await api.post("/deploy", formData);

      console.log(response.data);

      alert(response.data.message);

    } catch (error) {

      console.error(error);

      alert("Deployment Failed");

    }

  };

  return (
    <div className="flex justify-end mt-8">

      <button
        onClick={handleDeploy}
        className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition"
      >
        🚀 Deploy Application
      </button>

    </div>
  );
}

export default DeployButton;