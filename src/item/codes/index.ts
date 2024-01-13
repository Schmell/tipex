export const insertUtils = `import {Utility} from "@friendofsvelte/tipex";
<Tipex htmlContent={htmlContent}>
    <svelte:fragment slot="utilities">
        <Utility/>
    </svelte:fragment>
</Tipex>`;

export const appendUtils = `<Tipex htmlContent={htmlContent}>
    <div aria-label="Custom utility button" slot="utilities">...</div>
</Tipex>`;

export const install = `npm install "@friendofsvelte/tipex";`
export const usage = `<script lang="ts">
    import {Tipex} from "@friendofsvelte/tipex";
    export let htmlContent = \`<p>This <a target="_blank" rel="noopener noreferrer" href="">content</a> is written by <a target="_blank" rel="noopener noreferrer" href="http://bishwas.net/">Bishwas</a> in 2023.</p>\`;
</script>

<Tipex htmlContent={htmlContent}
    style="margin-top: 1rem; margin-bottom: 0;" 
    className="h-[70vh] border border-neutral-200"/>`;

export let htmlContent = `
<p>This <strong>content</strong> is written by <a target="_blank" rel="noopener noreferrer" href="http://bishwas.net/">Bishwas</a> in 2023. You can edit this content and see the changes in the editor.</p><p>Do you have any questions? Feel free to ask in the <a target="_blank" rel="noopener noreferrer" href="https://github.com/friendofsvelte/tipex">Github repository</a>.</p><p>Try writing some code, list, or blockquote, and see how it looks in the editor.</p><pre><code class="language-python">from typing import Literal

class FellowDeveloper:
    contri_to_opensource: str
    gender: Literal['MALE', 'FEMALE']
    experience: int
    love_coding: bool
    knows_regex: bool
    age: int

    def should_date(self) -&gt; bool:
        return (self.knows_regex and self.age &lt; 21 and
                self.contri_to_opensource and self.gender == 'FEMALE')

    def get_reaction(self) -&gt; str:
        if self.should_date():
            return Responses.DATE_HER
        return Responses.REJECT


class Responses:
    DATE_HER = "Woow! Are you free for a coffee and a code review date?"
    REJECT = "Nice to meet you, fellow developer!"</code></pre><p>I hope you enjoyed.</p>
`;

export let styling = `import "@friendofsvelte/tipex/styles/Tipex.css";
import "@friendofsvelte/tipex/styles/ProseMirror.css";
import "@friendofsvelte/tipex/styles/Controls.css";
import "@friendofsvelte/tipex/styles/EditLink.css";
import "@friendofsvelte/tipex/styles/CodeBlock.css";`


export let access = `import {tipexEditor} from '@friendofsvelte/tipex';`

const codes = {
    insertUtils,
    install,
    usage,
    appendUtils,
    htmlContent,
    access,
    styling
}
export default codes;