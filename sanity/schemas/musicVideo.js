export default {
  name: 'musicVideo',
  title: 'Music Video',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Video Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'videoType',
      title: 'Video Type',
      type: 'string',
      options: {
        list: [
          { title: 'YouTube', value: 'youtube' },
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Embed Code', value: 'embed' }
        ]
      },
      initialValue: 'youtube',
      validation: Rule => Rule.required()
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url',
      description: 'Full YouTube URL (e.g., https://www.youtube.com/watch?v=xxxxx)',
      hidden: ({ parent }) => parent?.videoType !== 'youtube'
    },
    {
      name: 'vimeoUrl',
      title: 'Vimeo URL',
      type: 'url',
      description: 'Full Vimeo URL (e.g., https://vimeo.com/xxxxx)',
      hidden: ({ parent }) => parent?.videoType !== 'vimeo'
    },
    {
      name: 'embedCode',
      title: 'Embed Code',
      type: 'text',
      description: 'Paste iframe embed code here',
      rows: 4,
      hidden: ({ parent }) => parent?.videoType !== 'embed'
    },
    {
      name: 'thumbnail',
      title: 'Video Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Optional custom thumbnail image'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Lower numbers appear first'
    }
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail'
    }
  }
}
