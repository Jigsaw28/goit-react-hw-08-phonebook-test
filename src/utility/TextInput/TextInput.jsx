import { useField } from "formik";

export const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errorId = `${props.id || props.name}-error`;
  return (
    <label style={{ display: 'block', marginBottom: 12 }}>
      <div style={{ marginBottom: 6, fontWeight: 600 }}>{label}</div>
      <input
        {...field}
        {...props}
        style={{
          width: '100%',
          padding: '8px 10px',
          borderRadius: 8,
          border: meta.touched && meta.error ? '1px solid #ef4444' : '1px solid #ccc',
        }}
        aria-invalid={meta.touched && meta.error ? 'true' : 'false'}
        aria-describedby={meta.touched && meta.error ? errorId : undefined}
      />
      {meta.touched && meta.error ? (
        <div id={errorId} style={{ color: '#ef4444', marginTop: 6, fontSize: 13 }}>
          {meta.error}
        </div>
      ) : null}
    </label>
  );
};