// contentlayer.config.js
import { defineDocumentType, makeSource } from "contentlayer/source-files";
var computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath
  }
};
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true
    },
    description: {
      type: "string",
      required: true
    },
    published: {
      type: "boolean",
      default: true
    }
  },
  computedFields
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./docs",
  documentTypes: [Page]
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-PMJ66MJB.mjs.map
