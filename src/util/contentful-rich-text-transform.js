import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const contentfulRichTextTransform = (data) => {
  return documentToHtmlString(JSON.parse(data))
}

export default contentfulRichTextTransform
