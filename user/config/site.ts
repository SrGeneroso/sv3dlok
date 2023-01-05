import type { Site } from '$lib/types/site';
import type { Giscus } from '$lib/types/giscus';
import type { DD } from '$lib/types/dd';

import Avatar from '$assets/avatar.png';
import Avatar_128 from '$assets/avatar.png?w=128&h=128&format=avif;webp&imagetools';
import Avatar_48_PNG from '$assets/avatar.png?w=48&h=48&imagetools';
import Avatar_96_PNG from '$assets/avatar.png?w=96&h=96&imagetools';
import Avatar_192_PNG from '$assets/avatar.png?w=192&h=192&imagetools';
import Avatar_512_PNG from '$assets/avatar.png?w=512&h=512&imagetools';

import SiteCover from '$assets/qwer.webp';

export const siteConfig: Site.Config = {
  url: 'https://Str3dlok.com',
  title: 'STR3DLOK',
  subtitle: 'this is the subtitle',
  description: 'this is the description',
  lang: 'es',
  timeZone: 'Europe/Madrid',
  since: 2022,
  cover: SiteCover,
  author: {
    name: 'Alejandro Baeza',
    status: '🎓',
    statusTip: 'Estudiando GameDev en la Uni<br>y enseñando Blender en YT',
    avatar: Avatar,
    avatar_128: Avatar_128,
    avatar_48_png: Avatar_48_PNG,
    avatar_96_png: Avatar_96_PNG,
    avatar_192_png: Avatar_192_PNG,
    avatar_512_png: Avatar_512_PNG,
    website: 'https://Str3dlok.com',
    github: 'https://github.com/srgeneroso',
    email: 'str3dlok@gmail.com',
    bio: `3D/Gamedev`,
  },
};

export const headConfig: Site.Head = {
  // Used for IndieWeb
  me: ['https://str3dlok.com'],
  custom: ({ dev }) =>
    dev
      ? [
          // For Development Environment
        ]
      : [
          // For Production Environment
          // Replace the following with your own setting
          // Plausible
          // '<link rel="preconnect" href="https://plausible.kwchang0831.dev" />',
          // '<script defer type="text/partytown" data-domain="svelte-qwer.vercel.app" src="https://plausible.kwchang0831.dev/js/plausible.js"></script>',
          // Google tag (gtag.js)
          // `<script type="text/partytown" src="https://www.googletagmanager.com/gtag/js?id=G-LQ73GWF6XT"></script>`,
          // `<script type="text/partytown">
          //   window.dataLayer = window.dataLayer || [];
          //   function gtag(){dataLayer.push(arguments);}
          //   gtag('js', new Date());
          //   gtag('config', 'G-LQ73GWF6XT');
          // </script>`,
        ],
};

export const dateConfig: Site.DateConfig = {
  toPublishedString: {
    locales: 'es-ES',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
  toUpdatedString: {
    locales: 'es-ES',
    options: {
      year: 'numeric',
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZone: `${siteConfig.timeZone}`,
    },
  },
};

// Replace with your own Giscus setting
// See https://giscus.app/
export const giscusConfig: Giscus.Config = {
  enable: false,
  id: 'giscus-comment',
  repo: import.meta.env.QWER_GISCUS_REPO,
  repoId: import.meta.env.QWER_GISCUS_REPO_ID,
  category: import.meta.env.QWER_GISCUS_CATEGORY,
  categoryId: import.meta.env.QWER_GISCUS_CATEGORY_ID,
  mapping: 'pathname',
  reactionsEnabled: '1',
  emitMetadata: '0',
  inputPosition: 'top',
  loading: 'lazy',
  lang: 'en',
  'data-strict': '0',
};

export const navConfig: (DD.Nav | DD.Link)[] = [
  // {
  //   name: 'About',
  //   url: '/about',
  // },
  {
    name: 'ArtStation',
    url: '/artstation',
  },
  // {
  //   name: 'See Docs 📄',
  //   url: 'https://docs-svelte-qwer.vercel.app/',
  //   rel: 'external',
  // },
  // {
  //   name: 'Get QWER 🚀',
  //   url: 'https://github.com/kwchang0831/svelte-QWER',
  //   rel: 'external',
  // },
];

export const mobilenavConfig: DD.Nav = {
  orientation: 2,
  links: [
    // {
    //   name: 'About',
    //   url: '/about',
    // },
    {
      name: 'ArtStation',
      url: '/artstation',
    },
    // {
    //   name: 'See Docs 📄',
    //   url: 'https://docs-svelte-qwer.vercel.app/',
    //   rel: 'external',
    // },
    // {
    //   name: 'Get QWER 🚀',
    //   url: 'https://github.com/kwchang0831/svelte-QWER',
    //   rel: 'external',
    // },
  ],
};
