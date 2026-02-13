import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
      options: { hotspot: true }
    }),
    defineField({
      name: 'location',
      title: 'Location', // e.g. "London, UK"
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      // Fix: Use !! to force a boolean result, and ['isCurrent'] to avoid type errors
      hidden: ({ document }) => !!document?.['isCurrent'] 
    }),
    defineField({
      name: 'isCurrent',
      title: 'Is this your current role?',
      type: 'boolean',
      initialValue: false
    }),
    // ❌ REMOVED: responsibilities (Array)
    // ✅ ADDED: description (Text Block)
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3
    }),
    // ✅ ADDED: technologies (Single line string for the "🔧 React..." part)
    defineField({
      name: 'technologies',
      title: 'Technologies Used', 
      description: 'e.g. "React, AWS, Node.js"',
      type: 'string'
    })
  ]
})