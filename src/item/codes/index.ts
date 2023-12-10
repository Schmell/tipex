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
    <p>This <strong>content</strong> is written by
    <a target="_blank" rel="noopener noreferrer" href="http://bishwas.net/">Bishwas</a> in 2023.
    You can edit this content and see the changes in the editor.
    </p>
    <p>Do you have any questions? Feel free to ask in the <a href="https://github.com/friendofsvelte/tipex"
    target="_blank" rel="noopener noreferrer">Github repository</a>.</p>
`;


export let access = `import {tipexEditor} from '@friendofsvelte/tipex';`

const index = {
    insertUtils,
    install,
    usage,
    appendUtils,
    htmlContent,
    access
}
export default index;