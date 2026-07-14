const { runPlaybook } = require("../services/ansibleService");

const deployApplication = async (req, res) => {

  console.log("Deployment Request:");
  console.log(req.body);

  try {

    const output = await runPlaybook(req.body);

    res.status(200).json({
      success: true,
      message: "Deployment started successfully!",
      ansibleOutput: output,
      data: req.body,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Ansible execution failed",
      error: error.message,
    });

  }

};

module.exports = {
  deployApplication,
};