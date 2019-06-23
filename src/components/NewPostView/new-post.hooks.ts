import { useState, useEffect } from 'react';
import Editor from 'tui-editor';

type HandleTitle = (e: React.ChangeEvent<HTMLInputElement>) => void;

// Editor intialize
export function useEditor(): tuiEditor.Editor | null {
  const [editor, setEditor] = useState<tuiEditor.Editor | null>(null);
  useEffect(() => {
    const tuiEditorWidth =
      window.innerWidth >= 1024
        ? window.innerHeight - 150
        : window.innerWidth * 0.7;
    if (editor === null) {
      setEditor(
        new Editor({
          el: document.querySelector('#editSection') as Element,
          initialEditType: 'markdown',
          previewStyle: window.innerWidth <= 1024 ? 'tab' : 'vertical',
          height: tuiEditorWidth.toString() + 'px',
        }),
      );
    }
  }, [editor]);
  return editor;
}

export function useTitle() {
  const [title, setTitle] = useState<string>('');
  useEffect(() => {}, [title]);
  const handleTitle: HandleTitle = e => {
    const value: string = e.target.value;
    setTitle(value);
  };
  return [title, handleTitle] as [string, HandleTitle];
}

// tags 상태와 tags 추가, 제거하는 이벤트 핸들러를 반환하는 함수
export function useTags() {
  const [tags, setTags] = useState<string[]>([]);
  useEffect(() => {}, [tags]);
  function handleTags(
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    if (e.keyCode === 13) {
      setTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = '';
    }
  }
  function removeTags(index: number) {
    setTags(tags.filter((_, filterIndex) => index !== filterIndex));
  }
  return [tags, handleTags, removeTags] as [
    string[],
    (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    (index: number) => void,
  ];
}
