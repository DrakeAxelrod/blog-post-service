import { visit } from 'unist-util-visit';
function rehypeCodeTitles() {
    return (tree) => visit(tree, 'element', visitor);
    function visitor(node, index, parent) {
        if (!parent || node.tagName !== 'pre') {
            return;
        }
        const pre = node;
        const code = Array.isArray(pre.children) ? pre.children[0] : pre.children;
        const className = code.properties.className || [];
        const updatedClassName = className.reduce((acc, cls) => {
            // If cls is something like...
            // i.e. language-typescript:lib/mdx.ts
            if (cls.includes(':')) {
                // Split on the ':'
                const [langClassName, title] = cls.split(':');
                // Add the title block to the tree at the index prior
                // to the <pre /> with the title we found.
                parent.children.splice(index, 0, {
                    children: [{ type: 'text', value: title }],
                    properties: { className: ['rehype-code-title'] },
                    tagName: 'div',
                    type: 'element',
                });
                acc.push(langClassName);
                return acc;
            }
            if (cls.slice(0, 9) === 'language-') {
                acc.push(cls);
                return acc;
            }
            return acc;
        }, []);
        pre.children = [{ ...code, properties: { className: updatedClassName } }];
    }
}
export default rehypeCodeTitles;
