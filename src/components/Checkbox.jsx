const Checkbox = ({
  id,
  text,
  className,
  checkboxClassName,
  labelClassName,
  checked,
  ...props
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="flex items-center">
        <input
          id={id || `checkbox-${text}`}
          type="checkbox"
          className={`w-5 h-5 rounded cursor-pointer transition-all focus:ring-2 focus:ring-offset-2 ${
            checked
              ? "bg-blue-600 border-blue-600 focus:ring-blue-500"
              : "bg-white border-gray-300 focus:ring-blue-500"
          } ${checkboxClassName || ""}`}
          checked={checked}
          {...props}
        />
      </div>

      {text && (
        <label
          htmlFor={id || `checkbox-${text}`}
          className={`ml-3 text-sm cursor-pointer select-none ${
            labelClassName || "text-gray-700"
          }`}
        >
          {text}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
