const core = require("@actions/core");
const github = require("@actions/github");

try {
  console.log(`automerge action log`);
  const pullRequest = github.context.payload["pull_request"];
  console.log(pullRequest);
} catch (error) {
  core.setFailed(error.message);
}
