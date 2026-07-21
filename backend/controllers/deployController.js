const { runPlaybook } = require("../services/ansibleService");

const deployApplication = async (req, res) => {
  try {
    const deploymentData = req.body;

    console.log("\n========== DEPLOYMENT REQUEST ==========");
    console.log(deploymentData);
    console.log("========================================\n");

    const output = await runPlaybook(deploymentData);

    res.status(200).json({
      success: true,
      message: "Deployment completed successfully!",
      output,
    });

  } catch (error) {

    console.error("Deployment Error:", error);

    res.status(500).json({
      success: false,
      message: "Deployment failed!",
      error,
    });

  }
};

module.exports = {
  deployApplication,
};