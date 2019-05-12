import * as React from 'react';
import Editor from 'tui-editor';
import InputTages from './InputTags';

// style load
import 'codemirror/lib/codemirror.css'; // codemirror
import 'tui-editor/dist/tui-editor.css'; // editor ui
import 'tui-editor/dist/tui-editor-contents.css'; // editor content
import 'highlight.js/styles/github.css'; // code block highlight

const { useState, useEffect } = React;

const NewPostView: React.FC = function() {
  // loading
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (loading) {
      new Editor({
        el: document.querySelector('#editSection') as Element,
        initialEditType: 'markdown',
        previewStyle: window.innerWidth <= 414 ? 'tab' : 'vertical',
        height: window.innerWidth * 0.75,
      });
    }
    setLoading(false);
  }, [loading]);

  return (
    <>
      <h2>새로운 포스트 작성</h2>
      <input type="text" />
      <section id="editSection" />
      <InputTages />
      <button>전송</button>
    </>
  );
};

export default NewPostView;
