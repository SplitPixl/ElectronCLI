var electronInstaller = require('electron-winstaller');

resultPromise = electronInstaller.createWindowsInstaller({
    appDirectory: './dist/builds/ElectronCLI-win32-x64',
    outputDirectory: './dist/installer/',
    iconUrl: 'https://splitpixl.xyz/assets/images/rjaWRHU.ico',
    authors: 'SplitPixl & MattSilverblood',
    exe: 'ElectronCLI.exe'
  });

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
