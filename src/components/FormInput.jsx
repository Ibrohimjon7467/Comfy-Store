function FormInput({ label, name, type, placeholder, defaultValue }) {
   return (
      <div className="form-control">
         <label className="label">
            <span className="label-text">{label}</span>
         </label>
         <input
            type={type}
            name={name}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="input input-bordered"
         />
      </div>
   );
}

export default FormInput