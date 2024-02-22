import React, { useRef } from "react";
import { Editor as BaseEditor, IAllProps } from "@tinymce/tinymce-react";
import cx from "classnames";
import kebabCase from "lodash/kebabCase";

import "./Editor.scss";
import cls from "./Editor.module.scss";

export interface IProps extends Omit<IAllProps, "onChange"> {
  id: string;
  state?: "default" | "success" | "error";
  placeholder?: string;
  disabled?: boolean;
  minHeight?: number;
  value: string;
  height?: number;
  apiKey: string;
  message?: string;
  onChange: (value: string) => void;
  imagesUploadHandler?: (blobInfo, onSuccess, onError, progress) => void;
}

const Editor: React.FC<IProps> = ({
  id,
  placeholder,
  disabled,
  state,
  value,
  apiKey,
  message,
  onChange,
  imagesUploadHandler,
  minHeight = 400,
  ...props
}) => {
  const ref = useRef<any>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const editorId = kebabCase(id);

  return (
    <div
      ref={wrapperRef}
      className={cx(
        cls.wrapper,
        state && cls[`wrapper--state-${state}`],
        disabled && cls["wrapper--disabled"]
      )}
    >
      <div className={cls.editor}>
        <BaseEditor
          ref={ref}
          {...{ props }}
          {...{ id: editorId, apiKey, placeholder, disabled }}
          onInit={(evt, editor) => (ref.current = editor)}
          onEditorChange={(newValue) => onChange && onChange(newValue || "")}
          value={value || ""}
          onFocus={() =>
            wrapperRef?.current &&
            wrapperRef?.current?.classList.add(cls["wrapper--focused"])
          }
          onBlur={() =>
            wrapperRef?.current &&
            wrapperRef?.current?.classList.remove(cls["wrapper--focused"])
          }
          init={{
            min_height: minHeight,
            readonly: disabled,
            placeholder,
            statusbar: false,
            menubar: false,
            image_title: true,
            automatic_uploads: true,
            plugins: [
              "autoresize",
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            file_picker_types: "image",
            toolbar:
              " undo redo | formatselect | " +
              "bold italic underline blockquote forecolor backcolor | alignleft aligncenter " +
              "alignright alignjustify | link image media | bullist numlist outdent indent | " +
              "removeformat | table | code",
            images_upload_handler: imagesUploadHandler,
          }}
        />
      </div>
      {!!message && <div className={cls.message}>{message}</div>}
    </div>
  );
};

export default Editor;
