export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        description: 'The name of the category.',
      },
    ],
    preview: {
      select: {
        title: 'name',
      },
    },
  };
  