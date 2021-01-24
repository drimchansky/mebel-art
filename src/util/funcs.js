import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

const generateProtocolLink = (type, data) => {
  switch (type) {
    case 'email':
      return `mailto:${data}`
    case 'phone':
      return `tel:${data}`
    default:
      return null
  }
}

const contentfulRichTextTransform = (data) => documentToHtmlString(JSON.parse(data))

export { generateProtocolLink, contentfulRichTextTransform }
