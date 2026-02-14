export default {
  name: 'merchandise',
  title: 'Merchandise',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Music', value: 'Music' },
          { title: 'Apparel', value: 'Apparel' },
          { title: 'Accessories', value: 'Accessories' },
          { title: 'Posters', value: 'Posters' }
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'image',
      title: 'Product Image (Upload)',
      type: 'image',
      options: {
        hotspot: true
      },
      description: 'Upload an image file to Sanity'
    },
    {
      name: 'imageUrl',
      title: 'External Image URL',
      type: 'url',
      description: 'Or use an external image URL (from Unsplash, etc.)'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Optional product description'
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
  ]
}
