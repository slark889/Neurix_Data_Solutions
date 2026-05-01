/**
 * Custom ESLint rule: no-html-link-for-pages
 *
 * Prevents usage of <a> tags for internal page navigation.
 * External links (mailto:, tel:, https?://, //) are allowed.
 * Internal links (starting with /, ./, ../) must use <Link> from next/link.
 */
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Prevent usage of <a> elements to navigate to internal Next.js pages.",
      recommended: true,
    },
    schema: [],
    messages: {
      useLink:
        "Do not use an `<a>` element for internal navigation to '{{href}}'. Use `<Link />` from `next/link` instead.",
    },
  },
  create(context) {
    return {
      JSXOpeningElement(node) {
        if (node.name.name !== "a") {
          return;
        }

        // Skip if target="_blank"
        const target = node.attributes.find(
          (attr) =>
            attr.type === "JSXAttribute" && attr.name.name === "target"
        );
        if (target && target.value && target.value.value === "_blank") {
          return;
        }

        // Skip if download attribute present
        const hasDownload = node.attributes.find(
          (attr) =>
            attr.type === "JSXAttribute" && attr.name.name === "download"
        );
        if (hasDownload) {
          return;
        }

        // Find href attribute
        const href = node.attributes.find(
          (attr) =>
            attr.type === "JSXAttribute" && attr.name.name === "href"
        );
        if (!href || !href.value || href.value.type !== "Literal") {
          return;
        }

        const hrefValue = href.value.value;

        // Allow external links
        if (/^(https?:\/\/|\/\/|mailto:|tel:|#)/.test(hrefValue)) {
          return;
        }

        // If it's an internal link (starts with /, ./, or ../), report it
        context.report({
          node,
          messageId: "useLink",
          data: { href: hrefValue },
        });
      },
    };
  },
};
