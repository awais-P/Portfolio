// backend/schemaTypes/project.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' }
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true } // Enables the smart cropper
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text'
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags' // Makes them look like chips
      }
    }),
    defineField({
      name: 'link',
      title: 'Live Demo URL',
      type: 'url'
    }),
    defineField({
      name: 'githubLink',
      title: 'GitHub Repo URL',
      type: 'url'
    })
  ]
})