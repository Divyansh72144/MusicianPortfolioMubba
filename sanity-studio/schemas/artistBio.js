export default {
  name: 'artistBio',
  title: 'Artist Bio',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'About',
      type: 'text',
      rows: 20
    }
  ],
  preview: {
    select: {
      title: 'bio'
    },
    prepare(selection) {
      const { bio } = selection
      return {
        title: bio ? bio.substring(0, 50) + '...' : 'Artist Bio'
      }
    }
  }
}
