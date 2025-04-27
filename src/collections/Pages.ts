import type { CollectionConfig } from 'payload';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
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
      name: 'blocks',
      type: 'blocks',
      required: true,
      blocks: [
        {
          slug: 'hero',
          fields: [
            { name: 'heading', type: 'text', required: true },
            { name: 'subheading', type: 'text' },
            { name: 'backgroundImage', type: 'upload', relationTo: 'media' },
          ],
        },
        {
          slug: 'richText',
          fields: [
            { name: 'content', type: 'richText', required: true },
          ],
        },
        {
          slug: 'image',
          fields: [
            { name: 'image', type: 'upload', relationTo: 'media', required: true },
            { name: 'caption', type: 'text' },
          ],
        },
        {
          slug: 'callToAction',
          fields: [
            { name: 'text', type: 'text', required: true },
            { name: 'url', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
}; 