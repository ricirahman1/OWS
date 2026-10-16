# Digital OWS — Next.js starter

This project runs the supplied Dynamic OWS Climatic Drive Test HTML inside a Next.js app.
The original HTML has been preserved intact (including its embedded images, JavaScript,
step flow, CTQ/CTP panels, burn-in timer, operator records, and export features) at
`public/ows/index.html`.

## Requirements
- Node.js 20.9+ (Node.js 24 is suitable)
- npm
- Dependencies installed from the project root

## Run
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Important notes
- This is a Next.js host/wrapper around the original HTML application; the existing OWS logic
  has not yet been rewritten into individual React components.
- The original file uses browser localStorage for local state/records; it does not provide a
  shared database, user authentication, or centralized audit trail.
- The original source describes some product matching rules as placeholders and some CTQ/CTP
  limits as draft examples. Verify them against the approved control plan and released work
  instructions before any real production/test use.
- If the company network blocks npm registry access, `npm install` may fail even though Node.js
  and npm are installed. Install dependencies on an approved internet-connected computer and
  transfer the project with `node_modules`, or ask IT to allow the required npm registry.
# OWS
# OWS
# OWS
