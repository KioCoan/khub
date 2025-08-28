import type { HubItem } from './src/data/hubItem.ts';
import { Camera, Github, Instagram, Linkedin, X } from 'lucide-astro';

export default {
    title: 'KioHub',
    favicon: 'favicon.ico',
    owner: 'Kio',
    hubItems: [
        {
            title: "Kioart",
            url: 'https://kio.art',
            social: Camera
        } as unknown as HubItem,
        {
            title: "GitHub",
            url: 'https://github.com/kiocoan',
            social: Github
        } as unknown as HubItem,
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/kiocoan',
            social: Instagram,
        } as unknown as HubItem,
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/caiocoan/',
            social: Linkedin,
        } as unknown as HubItem,
        {
            title: "X",
            url: "https://x.com/oTalDoCodaFofo",
            social: X
        } as unknown as HubItem,
    ],
};