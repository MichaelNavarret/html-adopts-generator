import { FieldValues, FormProvider, useForm } from "react-hook-form";
import TextFieldComponent from "../components/TextFieldComponent";
import { useState } from "react";
import { htmlBaseCode } from "../constants/htmlCodes";

export const HtmlGenerator = () => {
  const form = useForm();
  const { handleSubmit } = form;
  const [htmlContent, setHtmlContent] = useState<string>(htmlBaseCode);

  const onSubmit = (data: FieldValues) => {
    let newHtml = htmlContent;
    newHtml = newHtml.replace("{{adopt_code}}", data.code);
    setHtmlContent(newHtml);
  };

  return (
    <div>
      <FormProvider {...form}>
        <div>
          <TextFieldComponent label="code" name="code" type="text" required />
          <input type="submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </FormProvider>
      {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }} /> */}
    </div>
  );
};
