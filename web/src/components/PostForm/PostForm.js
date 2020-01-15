import {
  RedwoodForm,
  RedwoodFormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from 'src/lib/RedwoodForm'

const CSS = {
  label: 'block mt-6 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-600',
  input:
    'block mt-2 w-full p-2 border border-gray-500 text-gray-900 rounded focus:outline-none focus:border-indigo-300',
  inputError:
    'block mt-2 w-full p-2 border border-red-500 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-600',
}

const PostForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data)
  }

  return (
    <div className="text-sm">
      <RedwoodForm onSubmit={onSubmit} error={props.error}>
        <RedwoodFormError
          error={props.error}
          wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mb-4"
          titleClassName="font-semibold"
          listClassName="mt-2 list-disc list-inside"
        />

        <Label
          name="title"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="title"
          defaultValue={props.post?.title}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="title" className={CSS.errorMessage} />

        <Label
          name="body"
          className={CSS.label}
          errorClassName={CSS.labelError}
        />
        <TextField
          name="body"
          defaultValue={props.post?.body}
          className={CSS.input}
          errorClassName={CSS.inputError}
          validation={{ required: true }}
        />
        <FieldError name="body" className={CSS.errorMessage} />

        <div className="mt-8">
          <Submit
            disabled={props.loading}
            className="px-6 py-2 bg-blue-700 text-white text-sm rounded uppercase font-semibold tracking-wider"
          >
            Save
          </Submit>
        </div>
      </RedwoodForm>
    </div>
  )
}

export default PostForm
