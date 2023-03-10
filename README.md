# choreo-configurable-check-status-update

Update the configurable check status

## Example

```
  build:
    steps:
    - name: Choreo Configurable Check Status Update
      uses: choreo-templates/choreo-configurable-check-status-update@v1
      with:
       appId: ${{secrets.APP_ID}}
       envId: ${{secrets.ENV_ID}}
       versionId: ${{secrets.VERSION_ID}}
       commitId: ${{secrets.COMMIT_ID}}
       runId: ${{secrets.RUN_ID}}
       configCheckStatus: ${{secrets.CONFIG_CHECK_STATUS}}
       configurableUpdateURL: ${{secrets.CONFIGURABLE_UPDATE_URL}}
```
