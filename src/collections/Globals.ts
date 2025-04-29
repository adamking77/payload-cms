import { GlobalConfig } from 'payload/types';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Globals: GlobalConfig = {
  slug: 'globals',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'content',
          type: 'richText',
          editor: lexicalEditor({
            features: {
              formatting: {
                alignment: {
                  center: true,
                  left: true,
                  right: true,
                },
                marks: ['bold', 'italic', 'underline', 'code'],
              },
              links: {
                enabled: true,
              },
            },
          }),
        },
        {
          name: 'links',
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
        {
          name: 'copyright',
          type: 'text',
        },
      ],
    },
  ],
}; 