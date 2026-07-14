const { exec } = require("child_process");

const runPlaybook = (deploymentData) => {
  return new Promise((resolve, reject) => {

    const {
      projectName,
      repository,
      applicationType,
      region,
      instance,
    } = deploymentData;

    const command = `wsl bash -c "cd /mnt/c/Nandini/Third\\ Year/cloud-infrastructure-automation-platform/ansible && ansible-playbook deploy.yml \
-e 'project_name=${projectName}' \
-e 'repo=${repository}' \
-e 'app_type=${applicationType}' \
-e 'region=${region}' \
-e 'instance=${instance}'"`;

    exec(command, (error, stdout, stderr) => {

      if (error) {
        reject(stderr || error.message);
        return;
      }

      resolve(stdout);

    });

  });
};

module.exports = {
  runPlaybook,
};