import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name', // e.g., "Angular"
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle / Type',
      type: 'string',
      description: 'Short text below name (e.g., "Backend Language")',
    }),
    defineField({
      name: 'icon',
      title: 'Icon / Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
  name: 'category',
  title: 'Category',
  type: 'string',
  options: {
    list: [
      { title: 'Backend', value: 'Backend' },
      { title: 'Cloud & DevOps', value: 'Cloud & DevOps' },
      { title: 'Databases', value: 'Databases' }, 
      { title: 'Frontend', value: 'Frontend' },
      { title: 'Other Tools & Practices', value: 'Other Tools & Practices' }
    ],
    layout: 'radio'
  }
}),
    defineField({
      name: 'proficiency',
      title: 'Proficiency (1-100)',
      type: 'number',
      validation: rule => rule.min(1).max(100)
    })
  ]
})