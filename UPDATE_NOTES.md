# Mahdi Portfolio — Updated media version

Included:
- 3 new gallery photos (cinematic car, figs, ladder portrait)
- New Portraits gallery filter in EN/FR/AR
- Reels replaced with Done Sofien Gym, Sunset Socal, Valentine Social Reel
- Matching poster frames generated from each video
- Large videos web-optimized for faster playback
- Vite output simplified to `artifacts/portfolio/dist` for static deployment

Local run:
`pnpm install`
`pnpm --filter @workspace/portfolio dev`

Render:
- Root Directory: blank
- Build Command: `pnpm install --frozen-lockfile && pnpm --filter @workspace/portfolio build`
- Publish Directory: `artifacts/portfolio/dist`
