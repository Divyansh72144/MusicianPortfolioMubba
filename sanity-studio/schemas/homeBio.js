export default {
  name: 'homeBio',
  title: 'Home Bio',
  type: 'document',
  fields: [
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 5
    }
  ],
  preview: {
    select: {
      title: 'bio'
    },
    prepare(selection) {
      const { bio } = selection
      return {
        title: bio ? bio.substring(0, 50) + '...' : 'Home Bio'
      }
    }
  }
}
