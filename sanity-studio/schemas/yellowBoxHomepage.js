export default {
  name: 'yellowBoxHomepage',
  title: 'Yellow Box Homepage',
  type: 'document',
  fields: [
    {
      name: 'text',
      title: 'Announcement Text',
      type: 'text',
      rows: 3
    }
  ],
  preview: {
    select: {
      title: 'text'
    },
    prepare(selection) {
      const { text } = selection
      return {
        title: text ? text.substring(0, 50) + '...' : 'Yellow Box Announcement'
      }
    }
  }
}
