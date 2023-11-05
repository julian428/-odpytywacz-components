import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useState } from "react";
import { cn } from "../lib/utils";
import MenuBar from "./EditorMenu";
import { options as EditorOptions } from "./EditorOptions";

interface Props {
  content?: string;
  className?: string;
}

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Image,
];

export default function Editor({ content, className }: Props) {
  const [editorContent, setEditorContent] = useState(content);

  return (
    <>
      <input type="hidden" name="editor-content" value={editorContent} />
      <EditorProvider
        slotBefore={<MenuBar options={EditorOptions} />}
        extensions={extensions}
        content={content}
        children={null}
        onUpdate={({ editor }) => {
          setEditorContent(editor.getHTML());
        }}
        editorProps={{
          attributes: {
            className: cn(
              "prose outline-none max-w-none bg-neutral bg-opacity-50",
              className
            ),
          },
        }}
      ></EditorProvider>
    </>
  );
}
