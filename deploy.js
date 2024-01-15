const { exec } = require('child_process');
const path = require('path');

const vaultPath = window.app.vault.adapter.basePath;
const gitPath = path.join(vaultPath, '..', '.git');

exec(`cd ${gitPath} && hexo d -g`, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行 hexo d -g 命令时出错: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});