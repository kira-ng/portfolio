export default {
  name: 'infos',
  title: 'Infos',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'tel',
      title: 'Tel',
      type: 'string',
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    },
  ],
}
