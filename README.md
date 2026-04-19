# Personal Site

A futuristic, holographic personal website built with Next.js and styled for a sci-fi interface.

## Project Status

- Next.js app created and running successfully.
- Site is configured to serve on `0.0.0.0`, so it can be accessed remotely at `http://raspberrypi:3000/` when using VS Code Remote Development on a Raspberry Pi.
- Includes a sci-fi inspired landing page with:
  - animated neon header
  - about section with placeholder content
  - skills grid
  - contact call-to-action
  - holographic UI styling and background effects

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- CSS modules + global CSS

## Local Development

```bash
npm install
npm run dev
```

Open the app in your browser at `http://raspberrypi:3000/` or use `http://localhost:3000/` if you are running locally.

## Production Build

```bash
npm run build
```

## GitHub Actions CI

A GitHub Actions workflow is included at `.github/workflows/ci.yml`.

It performs:

- checkout
- Node.js setup
- dependency install with `npm ci`
- production build with `npm run build`
- uploads the build artifact

## Deployment Notes

The project is intended to be deployed as a containerized web application in AWS.

For container deployment, build the site with `npm run build` and use the `.next` output together with the app source and `package.json` in your container image.

## File Structure

- `app/` — Next.js app routes and page components
- `app/page.tsx` — home page with holographic About section
- `app/layout.tsx` — root layout with global background
- `app/globals.css` — global styles and sci-fi theme
- `app/page.module.css` — scoped page styles
- `.github/workflows/ci.yml` — CI build workflow

## Next Steps

Possible enhancements:

- add navigation and additional pages (`Projects`, `Contact`)
- customize personal profile content
- add AWS container deployment configuration
