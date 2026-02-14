export default {
  name: 'tourDate',
  title: 'Tour Date',
  type: 'document',
  fields: [
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      description: 'e.g., "8:00 PM"'
    },
    {
      name: 'ticketUrl',
      title: 'Ticket URL',
      type: 'url',
      description: 'Link to buy tickets'
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Available', value: 'available' },
          { title: 'Sold Out', value: 'sold-out' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      initialValue: 'available'
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
      title: 'Date',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}]
    }
  ]
}
