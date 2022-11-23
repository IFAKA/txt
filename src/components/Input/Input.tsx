const Input = ({
  onChange,
  value,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}) => {
  return (
    <input
      onChange={onChange}
      value={value}
      className="w-full pl-10 pr-2.5 py-2 dark:bg-slate-800"
      type="search"
      placeholder="Search"
    />
  )
}
export default Input
