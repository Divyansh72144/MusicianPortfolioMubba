export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
      initialValue: 'Marcus Miller'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
      description: 'General site description for SEO'
    },
    {
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'tourImage',
      title: 'Tour Page Image',
      type: 'image',
      description: 'Image for the tour section'
    },
    {
      name: 'newsletterTitle',
      title: 'Newsletter Section Title',
      type: 'string',
      initialValue: 'Stay Updated'
    },
    {
      name: 'newsletterText',
      title: 'Newsletter Text',
      type: 'text',
      initialValue: 'Subscribe to get the latest news, tour dates, and exclusive content.'
    }
  ]
}
