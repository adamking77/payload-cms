import { GlobalConfig } from 'payload/types';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Globals: GlobalConfig = {
  slug: 'globals',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navigation',
      type: 'group',
      fields: [
        {
          name: 'showThemeToggle',
          type: 'checkbox',
          defaultValue: true,
          label: 'Show Theme Toggle',
        },
        {
          name: 'additionalLinks',
          type: 'array',
          fields: [
            {
              name: 'text',
              type: 'text',
              required: true,
            },
            {
              name: 'url',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      type: 'group',
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
              label: 'Show Font Credit',
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
          editor: lexicalEditor({
            features: {
              formatting: {
                alignment: {
                  center: true,
                  left: true,
                  right: true,
                },
                marks: ['bold', 'italic', 'underline'],
              },
              links: {
                enabled: true,
              },
            },
          }),
        },
      ],
    },
  ],
}; 