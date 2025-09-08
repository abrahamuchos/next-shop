import {createElement, HTMLAttributes} from "react";
import sanitizeHtml from "sanitize-html";

type SanitizeHtmlProps = {
  tag: string;
  children: string;
} & HTMLAttributes<HTMLElement>

export default function SanitizeHtml({tag, children, ...rest}: SanitizeHtmlProps) {

  const sanitized = sanitizeHtml(children, {
    allowedTags: ['b', 'i', 'em', 'strong', 'br', 'ul', 'li', 'ol'],
    allowedAttributes: {
      'a': ['href']
    }
  });

  return createElement(
    tag,
    {...rest},
   sanitized
  )
}


