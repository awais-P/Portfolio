import { Pipe, PipeTransform } from '@angular/core';
import { toHTML } from '@portabletext/to-html';

@Pipe({
  name: 'sanityHtml',
  standalone: true,
})
export class SanityHtmlPipe implements PipeTransform {
transform(value: any): string {
    if (!value) return '';

    // This function converts the JSON blocks into HTML strings
    // e.g. <p>Hello <b>World</b></p>
    return toHTML(value, {
      components: {
        // Optional: formatting for specific types if you need it later
      }
    });
  }
}