import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'profile',
  title: 'Profile / About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string'
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline', // e.g., "Full Stack Dev | .NET Enthusiast"
      type: 'string'
    }),
    defineField({
      name: 'profileImage',
      title: 'Profile Picture',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text', // Simple text area for now
      rows: 4
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string'
    }),
    defineField({
      name: 'resume',
      title: 'Resume / CV (PDF)',
      type: 'file', // <--- Allows file upload
      options: {
        accept: '.pdf'
      }
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'linkedin', type: 'url', title: 'LinkedIn URL' },
        { name: 'github', type: 'url', title: 'GitHub URL' },
        { name: 'twitter', type: 'url', title: 'Twitter/X URL' }
      ]
    })
  ]
})