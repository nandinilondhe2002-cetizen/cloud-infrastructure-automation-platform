const { spawn } = require("child_process");

const runPlaybook = (deploymentData) => {
  return new Promise((resolve, reject) => {

    const {
      projectName,
      repository,
      applicationType,
      region,
      instance,
    } = deploymentData;

    const command = `
cd "/mnt/c/Nandini/Third Year/cloud-infrastructure-automation-platform/ansible" &&
ansible-playbook -i inventory.ini deploy.yml \
-e "project_name=${projectName}" \
-e "repo=${repository}" \
-e "app_type=${applicationType}" \
-e "region=${region}" \
-e "instance=${instance}"
`;

    console.log("Starting Ansible...");

    const child = spawn("wsl", ["bash", "-c", command]);

    let output = "";
    let errorOutput = "";

    child.stdout.on("data", (data) => {
      const text = data.toString();
      output += text;
      console.log(text);
    });

    child.stderr.on("data", (data) => {
      const text = data.toString();
      errorOutput += text;
      console.error(text);
    });

    child.on("close", (code) => {
      console.log(`Ansible exited with code ${code}`);

      if (code === 0) {
        resolve(output);
      } else {
        reject(errorOutput || `Playbook exited with code ${code}`);
      }
    });

  });
};

module.exports = {
  runPlaybook,
};