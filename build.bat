electron-packager .\ ElectronCLI --platform="win32" --arch="x64" --out=".\dist\builds" --override && copy .\package.json .\dist\builds\ElectronCLI-win32-x64\resources\app && node build.js
