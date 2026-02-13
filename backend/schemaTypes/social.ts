import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform Name',
      type: 'string',
      description: 'e.g., LinkedIn, GitHub, Twitter',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) => rule.required().uri({ scheme: ['http', 'https', 'mailto'] }),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      description: 'Upload the logo (SVG or PNG recommended)',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          initialValue: 'Social Icon',
        }
      ]
    }),
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
      media: 'icon',
    },
  },
})