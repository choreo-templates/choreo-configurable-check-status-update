const core = require('@actions/core');
const axios = require('axios').default;

try {
    const appId = core.getInput('appId');
    const envId = core.getInput('envId');
    const apiVersionId = core.getInput('versionId');
    const commitId = core.getInput('commitId');
    const runId = core.getInput('runId');
    const configurableUpdateURL = core.getInput('configurableUpdateURL');
    const configMatch = core.getInput('configCheckStatus');

    if (configMatch === "success") {
        let successMsg = "Configurable Check Success";
        console.log(successMsg);
        updateRudderWithNewConfigurables(configurableUpdateURL, appId, envId, apiVersionId, commitId, runId, configMatch);
    }
} catch (error) {
    console.log(error, "Configurable check status update failed !");
}

function updateRudderWithNewConfigurables(configurableUpdateURL, appId, envId, apiVersionId, commitId, runId, status) {
    if(configurableUpdateURL != "") {
        const payload = {
            "appId": appId,
            "environmentId": envId,
            "apiVersionId": apiVersionId,
            "commitId": commitId,
            "runId": parseInt(runId),
            "status": status
        };

        axios.post(configurableUpdateURL, payload).then(function (response) {
            core.setOutput("choreo-configurable-update-status", "updated");
            console.log("choreo-configurable-update-status", "updated");
            console.log("Config Update Status : " + response.status);
          })
          .catch(function (error) {
            core.setOutput("choreo-status", "failed");
            console.log(error);
          });
    }   
}
