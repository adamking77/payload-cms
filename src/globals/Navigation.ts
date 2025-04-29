import { GlobalConfig } from 'payload';

const Navigation: GlobalConfig = {
  slug: 'navigation',
  preview: {
    url: () => 'https://adamking.me/',
  },
  fields: [
    {
      name: 'showThemeToggle',
      type: 'checkbox',
      defaultValue: true,
      label: 'Show Theme Toggle',
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
  ],
};

export default Navigation; 