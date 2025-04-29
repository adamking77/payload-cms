import { GlobalConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'copyright',
      type: 'text',
      defaultValue: '© 2010 - 2025 Adam King . All Rights Reserved.',
    },
    {
      name: 'fontCredit',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: true,
        },
        {
          name: 'text',
          type: 'text',
          defaultValue: 'This website proudly uses Lexend font, a specialty font designed to reduce cognitive noise, and improve reading fluency, especially for neurodivergent people like myself.',
        },
        {
          name: 'fontLink',
          type: 'text',
          defaultValue: 'https://www.lexend.com/',
        },
      ],
    },
    {
      name: 'additionalContent',
      type: 'richText',
      editor: lexicalEditor(),
    },
  ],
};

export default Footer; 