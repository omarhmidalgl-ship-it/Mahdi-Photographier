# Mahdi Portfolio — First Pass

This pass turns the existing photography-only homepage into a broader visual creator portfolio using the client material provided.

## Updated
- New cinematic hero with Mahdi's positioning as videographer, storyteller, photographer, editor and content creator.
- New navigation for Work, Reels, About and Contact.
- Curated portfolio categories: Weddings, Events, Sports and Commercial.
- Click-to-open image lightbox.
- Services section for Videography, Photography, Editing and Content Creation.
- Reels section using three supplied videos (web-optimized copies).
- About section rewritten from the client's supplied biography.
- Qatar location, architecture education and software skills added.
- English, French and Arabic copy updated.
- New client photography assets integrated into the homepage.

## Local run
From the repository root:

```bash
pnpm install
pnpm --filter @workspace/portfolio dev
```

Or use the existing root scripts once dependencies are installed.

## Notes
- Contact links are still the contact details that were already in the original project. Confirm them with Mahdi before production launch.
- Backend/database/admin upload functionality is not part of this pass yet.
- Large source videos were compressed to 720px-wide H.264 web copies to keep the project practical.
