<script lang="ts">
  import { uploadFile } from "@/api/filesystem/file";
  import { getExtension } from "@/utils/utils";
  import { createField, getValue } from "felte";
  import { createEventDispatcher } from "svelte";
  import Label from "./Label.svelte";
  import Error from "./Error.svelte";

  import toast from "svelte-french-toast";

  export let fileTypes: string[];
  export let name: string;
  export let disabled: boolean = false;
  export let label: string;
  export let fileSize: number;

  let input: HTMLInputElement;
  const dispatch = createEventDispatcher();
  const { field, onChange } = createField(name);

  const onTypeError = () => {
    toast.error(
      `Format file tidak didukung, pilih file dengan format ${fileTypes.toString()}`
    );
  };

  const onFileSizeLarger = (fileSize: number) => {
    toast.error(`File tidak boleh lebih besar dari ${fileSize / 1000} MB`);
  };

  const onFileMoreThanOne = () => {
    toast.error(`File tidak boleh lebih dari satu!`);
  };

  const handleDropFile = async (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
    dataTransfer: { files: any };
  }) => {
    e.preventDefault();
    e.stopPropagation();

    const { files } = e.dataTransfer;

    console.log(files);

    if (files && files.length) {
      if (files.length > 1) {
        onFileMoreThanOne();
        return;
      }
      if (
        !fileTypes.includes(getExtension(files[0].name as string) as string)
      ) {
        onTypeError();
        return;
      }
      if (files[0].size / 1000 > fileSize) {
        onFileSizeLarger(fileSize);
        return;
      }
      const url = await uploadFile({ file: files[0], is_public: true });
      onChange(url);
      dispatch("fileUpload", {
        url: url,
      });
    }
  };

  const handleDragOver = (e: {
    preventDefault: () => void;
    stopPropagation: () => void;
  }) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleOnClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = fileTypes
      .map((value) => {
        return `.${value}`;
      })
      .join(",");
    input.onchange = async (_) => {
      // you can use this method to get file and perform respective operations
      if (input.files) {
        const files: File[] = Array.from(input.files);
        if (files && files.length) {
          if (files.length > 1) {
            onFileMoreThanOne();
            return;
          }
          if (files[0] == null || undefined) {
            return;
          }
          if (!fileTypes.includes(getExtension(files[0].name) as string)) {
            onTypeError();
            return;
          }
          if (files[0].size / 1000 > fileSize) {
            onFileSizeLarger(fileSize);
            return;
          }
          const url = await uploadFile({ file: files[0], is_public: true });
          onChange(url);
          dispatch("fileUpload", {
            url: url,
          });
        }
      }
    };
    input.click();
  };

  function handleInput(e) {
    onChange(e.currentTarget.innerText);
  }
</script>

<div class="flex flex-col">
  {#if label}
    <Label {name} {label} />
  {/if}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="flex w-full flex-col items-center justify-center border-2 border-dashed border-gray-500 bg-gray-200 px-5 py-5"
    on:drop={handleDropFile}
    on:dragover={handleDragOver}
    on:click={handleOnClick}
  >
    {#if getValue(name)}
      <!-- content here -->
    {:else}
      <!-- else content here -->
    {/if}
    <input
      {name}
      type="hidden"
      {...field}
      on:change={handleInput}
      bind:this={input}
    />
  </div>
  <Error {name} />
</div>
