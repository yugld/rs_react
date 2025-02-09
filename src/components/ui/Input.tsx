import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  children?: ReactNode;
  className?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { children, className, ...rest } = props;

  const defaultStyles =
    'w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow';

  let colorStyles = '';

  const inputStyles = `${defaultStyles} ${colorStyles} ${className ? className : ''}`;

  return (
    <input className={inputStyles} ref={ref} {...rest} placeholder="...">
      {children}
    </input>
  );
});

Input.displayName = 'Input';

const InputWithRef = forwardRef<HTMLInputElement, Omit<InputProps, 'ref'>>(
  (props, ref) => {
    return <Input {...props} ref={ref} />;
  }
);

InputWithRef.displayName = 'InputWithRef';

export default InputWithRef;
