import { createEffect } from "solid-js";
import addTinyMce, { getTinyEditorContent, setMode } from "../../editor/index";
import ButtonLoader from "../ButtonLoader/buttonLoader";

const emptyUpdateIssueText = "<p>Please add issues here...</p>";

const AppEditor = ({
  initialValue,
  onUpdateIssue,
  isEditable,
  isIssueCreation,
}) => {
  const updateIssue = (e) => {
    const _editorContent = getTinyEditorContent("issue");
    onUpdateIssue(_editorContent);
  };

  const setEditorMode = (e) => {
    if (isEditable()) {
      setMode("issue", "design");
    } else {
      setMode("issue", "readonly");
    }
  };

  createEffect(() => {
    const defaultValue = Boolean(initialValue)
      ? initialValue
      : emptyUpdateIssueText;
    addTinyMce(defaultValue);
  }, []);

  createEffect(() => {
    setEditorMode();
  }, [isEditable]);

  createEffect(() => {
    if (isIssueCreation) {
      setTimeout(() => {
        setMode("issue", "design");
      }, 300);
    }
  }, []);

  return (
    <>
      <textarea name="name" id="issue" rows="4" cols="40"></textarea>
    </>
  );
};

export default AppEditor;
