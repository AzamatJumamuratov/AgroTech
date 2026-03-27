export default function ConvertToJSonFormData(formData) {
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  return JSON.stringify(data);
}
