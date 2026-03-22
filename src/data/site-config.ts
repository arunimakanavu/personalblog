import avatar from '../assets/images/avatar.png';
// import hero from '../assets/images/hero.jpg';
import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    avatar: {
        src: avatar,
        alt: 'Arunima Surendran'
    },
    title: 'Arunima Surendran',
    subtitle: 'Quaero, ergo sum.',
    description: 'This is where I speak',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Tech',
            href: '/blog'
        },
        {
            text: 'Musings',
            href: '/musings'
        },
        {
            text: 'Poetry',
            href: '/poetry'
        },
        {
            text: 'About',
            href: '/about'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/arunima-surendran/'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/arunimakanavu/'
        },
        {
            text: 'X/Twitter',
            href: 'https://twitter.com/'
        }
    ],
    hero: {
        title: 'Achromatic Inkpot',
        text: "*My brain hums with the scraps of poetry and madness - Virginia Woolf*",
        // image: {
        //     src: hero,
        //     alt: 'A person sitting at a desk in front of a computer'
        // },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        enabled: true,
        title: 'Subscribe to my newsletter',
        text: 'No spams, I promise!',
        form: {
            action: '#'
        }
    },
    postsPerPage: 8,
    musingsPerPage: 8,
    poetryPerPage: 8
};

export default siteConfig;
