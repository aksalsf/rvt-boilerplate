import { Controller, UseControllerProps, FieldValues } from "react-hook-form"
import { TextField as MuiTextField } from "@mui/material"
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material"

type TextFieldProps<T extends FieldValues> = UseControllerProps<T> & Partial<MuiTextFieldProps>

function TextField<T extends FieldValues>({
  name,
  control,
  ...muiTextFieldProps
}: TextFieldProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <MuiTextField
          {...muiTextFieldProps}
          {...field}
          id={name}
        />
      )}
    />
  )
}

export default TextField
