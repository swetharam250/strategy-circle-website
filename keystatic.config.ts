import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'swetharam250/strategy-circle-website',
  },

  collections: {
    resources: collection({
      label: 'Resources',
      path: 'src/content/resources/*',
      slugField: 'title',

      columns: ['title', 'type', 'topic', 'date'],

      format: {
        contentField: 'content',
      },

      schema: {
        title: fields.slug({
          name: {
            label: 'Title',
          },
        }),

        description: fields.text({
          label: 'Description',
          multiline: true,
        }),

        date: fields.date({
          label: 'Published Date',
        }),

        type: fields.select({
          label: 'Resource Type',
          options: [
            {
              label: 'Guides & Insights',
              value: 'Guides & Insights',
            },
            {
              label: 'White Papers',
              value: 'White Papers',
            },
            {
              label: 'Blogs & Articles',
              value: 'Blogs & Articles',
            },
          ],
          defaultValue: 'Blogs & Articles',
        }),

        topic: fields.select({
          label: 'Topic',
          options: [
            {
              label: 'DPDP Implementation',
              value: 'DPDP Implementation',
            },
            {
              label: 'Tax Advisory',
              value: 'Tax Advisory',
            },
            {
              label: 'Financial & Tax Due Diligence',
              value: 'Financial & Tax Due Diligence',
            },
            {
              label: 'Investment Readiness',
              value: 'Investment Readiness',
            },
            {
              label: 'Business Structuring & Compliance',
              value: 'Business Structuring & Compliance',
            },
            {
              label: 'Fractional CFO',
              value: 'Fractional CFO',
            },
            {
              label: 'Contract Financial Risk Management',
              value: 'Contract Financial Risk Management',
            },
          ],
          defaultValue: 'Tax Advisory',
        }),

        author: fields.text({
          label: 'Author',
          defaultValue: 'Swetha Ranganathan',
        }),

        source: fields.text({
          label: 'Original Source',
        }),

        sourceUrl: fields.url({
          label: 'Original Source URL',
        }),

        format: fields.select({
          label: 'Page Format',
          options: [
            { label: 'Article', value: 'article' },
            { label: 'Visual Guide', value: 'visual-guide' },
            { label: 'Web Guide', value: 'web-guide' },
            { label: 'Long-form Guide', value: 'long-form-guide' },
            { label: 'White Paper', value: 'white-paper' },
          ],
          defaultValue: 'article',
        }),

        image: fields.image({
          label: 'Card / Cover Image',
          description: 'Upload the image shown on the Resources card and article cover.',
          directory: 'public/resources/images',
          publicPath: '/resources/images/',
        }),

        asset: fields.file({
          label: 'PDF / Downloadable File',
          description: 'Optional PDF or downloadable resource file.',
          directory: 'public/resources/files',
          publicPath: '/resources/files/',
        }),

        downloadLabel: fields.text({
          label: 'Download Button Label',
        }),

        featured: fields.checkbox({
          label: 'Featured Resource',
          defaultValue: false,
        }),

        content: fields.markdoc({
          label: 'Article / Guide Content',
          extension: 'md',
          options: {
            formatting: true,
          },
        }),
      },
    }),
  },
});
