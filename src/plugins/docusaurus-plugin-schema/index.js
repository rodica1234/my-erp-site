export default function schemaPlugin() {
  return {
    name: 'docusaurus-plugin-schema',

    injectHtmlTags({ content, context }) {
      const schema =
        content?.frontMatter?.schema ||
        context?.frontMatter?.schema ||
        context?.doc?.frontMatter?.schema;

      if (!schema) return {};

      return {
        headTags: [
          {
            tagName: 'script',
            attributes: { type: 'application/ld+json' },
            innerHTML: JSON.stringify(schema, null, 2),
          },
        ],
      };
    },

    async postBuild() {
      console.log('✅ Plugin schema: paginile vor avea JSON-LD injectat (dacă există în frontmatter).');
    },
  };
}
