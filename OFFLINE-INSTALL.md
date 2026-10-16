# Offline setup (Windows)

`npm install` needs the dependency packages. The ZIP intentionally includes source files only,
not `node_modules`.

1. Extract this ZIP to a folder such as `C:\\Users\\SESA777647\\Downloads\\Digital-OWS-NextJS`.
2. On an approved computer with npm registry access, open CMD in that folder and run:
   ```cmd
   npm install
   npm run build
   ```
3. Copy the complete project folder, including `node_modules`, to the offline laptop.
4. On the offline laptop, open CMD in the copied folder and run:
   ```cmd
   npm run dev
   ```
5. Open http://localhost:3000.

If `npm install` shows `ENOENT package.json`, CMD is in the wrong folder. Run `dir` and check
that `package.json` is listed before running npm commands.
