import { useData } from "@/context"
import { IContext } from "@/models"
import { motion } from "framer-motion"
import { RiSearchLine } from "react-icons/ri"
import { Input } from "../Input"
const SearchBar = () => {
  const {
    data: { search },
    setProp,
  } = useData() as IContext

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setProp({ search: e.target.value })

  return (
    <motion.div
      className="mx-4 relative w-full flex justify-around items-center max-w-sm standup"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 0.2,
        delay: 0.15,
      }}
    >
      <div className="pl-3 absolute inset-y-0 left-0 flex items-center pointer-events-none">
        <RiSearchLine />
      </div>
      <Input onChange={handleChange} value={search} />
    </motion.div>
  )
}
export default SearchBar
