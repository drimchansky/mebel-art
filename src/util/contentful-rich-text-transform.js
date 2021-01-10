import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const contentfulRichTextTransform = (data) => documentToHtmlString(JSON.parse(data))

export default contentfulRichTextTransform
