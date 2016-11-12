electron-packager .\ ElectronCLI --platform="win32" --arch="x64" --out=".\dist\builds" --override && copy .\ .\dist\builds\ElectronCLI-win32-x64\resources\app && node build.js
