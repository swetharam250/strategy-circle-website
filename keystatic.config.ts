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
            description: 'The public title of the article or guide.',
          },
        }),

        description: fields.text({
          label: 'Short Description',
          description: 'A short 1–2 sentence summary shown on the Resources page.',
          multiline: true,
        }),

        date: fields.date({
          label: 'Publish Date',
          description: 'The date shown publicly on the resource.',
        }),

        type: fields.select({
          label: 'Resource Type',
          description: 'Choose where this item should appear in the Resources filters.',
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
          label: 'Topic / Service',
          description: 'Tag the resource to the most relevant Strategy Circle service area.',
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

        image: fields.image({
          label: 'Cover Image',
          description: 'Optional. Upload the image shown on the Resources card and article page.',
          directory: 'public/resources/images',
          publicPath: '/resources/images/',
        }),

        content: fields.markdoc({
          label: 'Main Content',
          description: 'Write or paste the full article or guide here.',
          extension: 'md',
          options: {
            formatting: true,
          },
        }),

        asset: fields.file({
          label: 'PDF / Downloadable File',
          description: 'Optional. Use this when the resource also has a PDF or downloadable guide.',
          directory: 'public/resources/files',
          publicPath: '/resources/files/',
        }),

        featured: fields.checkbox({
          label: 'Feature this resource',
          description: 'Turn this on only when this should be highlighted as a featured resource.',
          defaultValue: false,
        }),

        author: fields.text({
          label: 'Author',
          description: 'Usually Swetha Ranganathan. Change only when required.',
          defaultValue: 'Swetha Ranganathan',
        }),

        source: fields.text({
          label: 'Original Source',
          description: 'Optional. For migrated content, e.g. LinkedIn or WordPress.',
        }),

        sourceUrl: fields.url({
          label: 'Original Source URL',
          description: 'Optional. Link to the original publication if one exists.',
        }),

        format: fields.select({
          label: 'Page Format',
          description: 'Advanced setting. For a standard new article, leave this as Article.',
          options: [
            { label: 'Article', value: 'article' },
            { label: 'Visual Guide', value: 'visual-guide' },
            { label: 'Web Guide', value: 'web-guide' },
            { label: 'Long-form Guide', value: 'long-form-guide' },
            { label: 'White Paper', value: 'white-paper' },
          ],
          defaultValue: 'article',
        }),

        downloadLabel: fields.text({
          label: 'Download Button Label',
          description: 'Advanced / optional. Leave blank unless the downloadable PDF needs a custom button label.',
        }),
      },
    }),
  },
});
