import type { CollectionConfig } from 'payload';
import { lexicalEditor } from '@payloadcms/richtext-lexical';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'sections',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'sectionType',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Hero',
              value: 'hero',
            },
            {
              label: 'About',
              value: 'about',
            },
            {
              label: 'Work',
              value: 'work',
            },
            {
              label: 'Now',
              value: 'now',
            },
          ],
        },
        {
          name: 'title',
          type: 'text',
          admin: {
            condition: (data) => data.sectionType !== 'hero',
          },
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
          editor: lexicalEditor({
            features: {
              formatting: {
                alignment: {
                  center: true,
                  left: true,
                  right: true,
                },
                marks: ['bold', 'italic', 'underline', 'strikethrough', 'code'],
              },
              heading: {
                enabled: true,
                levels: [1, 2, 3],
              },
              lists: {
                enabled: true,
                types: ['ordered', 'unordered'],
              },
              links: {
                enabled: true,
              },
              quotes: {
                enabled: true,
              },
              upload: {
                enabled: true,
              },
            },
          }),
        },
        {
          name: 'order',
          type: 'number',
          required: true,
          defaultValue: 0,
          admin: {
            step: 1,
          },
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
}; 