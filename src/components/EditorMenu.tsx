import { ChainedCommands, Editor, useCurrentEditor } from "@tiptap/react";

interface Props {
  options: {
    tooltip: string;
    action: (arg0: ChainedCommands) => ChainedCommands;
    active?: (editor: Editor) => boolean;
    disabled?: (arg0: ChainedCommands) => ChainedCommands;
    svg: JSX.Element;
  }[];
}

export default function MenuBar({ options }: Props) {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  return (
    <ul className="menu menu-xs items-center bg-neutral sticky top-0 z-10 menu-horizontal border-b border-base-100">
      {options.map((option) => (
        <li className="tooltip tooltip-accent" data-tip={option.tooltip}>
          <button
            type="button"
            onClick={() => option.action(editor.chain().focus()).run()}
            className={
              option.active && option.active(editor) ? "text-primary" : ""
            }
            disabled={
              option.disabled &&
              !option.disabled(editor.can().chain().focus()).run()
            }
          >
            {option.svg}
          </button>
        </li>
      ))}
    </ul>
  );
}
