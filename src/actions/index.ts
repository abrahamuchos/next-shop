'use server'
type FormData = EventTarget & HTMLFormElement

export const handleCreateUser = async (formData: FormData) => {
  console.log('HandleCreate>>', formData);

}