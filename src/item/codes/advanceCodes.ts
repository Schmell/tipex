const customizeControlImplementation = `<Tipex htmlContent={htmlContent}
    controlElement={CustomControl}
    />`;

const customizeControl = `<script lang="ts">
    import {tipexEditor} from "@friendofsvelte/tipex";
</script>


{#if $tipexEditor}
    <div class="...">
        <div class="...">
            <div class="...">
                {#each {length: 5} as _, index}
                    {@const level = index + 2}
                    <button
                            on:click={() => $tipexEditor?.chain().focus().toggleHeading({ level }).run()}
                            class="tipex-edit-button"
                            class:active={$tipexEditor?.isActive('heading', { level })}
                    >
                        H{level}
                    </button>
                {/each}


                <button
                        on:click={() => $tipexEditor?.chain().focus().setParagraph().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('paragraph')}
                >
                    <iconify-icon icon="fa6-solid:paragraph"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleBold().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('bold')}
                >
                    <iconify-icon icon="fa6-solid:bold"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleItalic().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('italic')}
                >
                    <iconify-icon icon="fa6-solid:italic"/>
                </button>

                <button
                        on:click={() => $tipexEditor?.chain().focus().toggleCode().run()}
                        class="tipex-edit-button"
                        class:active={$tipexEditor?.isActive('code')}
                >
                    <iconify-icon icon="fa6-solid:code"/>
                </button>

            </div>

            <div class="flex gap-2 text-xs">
                <button type="button"
                        class="..."
                        on:click={performAction1}>
                    Action#1
                </button>

                <button type="submit"
                        class="...">
                        <span class="hidden md:flex">
                            Post discussion
                        </span>
                    <iconify-icon
                            class="..."
                            icon="fa6-solid:paper-plane"/>
                </button>
            </div>
        </div>
    </div>
{/if}`;

export default {
    customizeControlImplementation,
    customizeControl
}