import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkHtml from 'remark-html';

/* Helper function to convert the markdown string to html string */
export async function parseMarkdownStringToHtml(markdownString: string) {
	const result = await unified().use(remarkParse).use(remarkHtml).process(markdownString);
	return result.value;
}
