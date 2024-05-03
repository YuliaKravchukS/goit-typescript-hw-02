import { MagnifyingGlass } from "react-loader-spinner"

const Loader = () => {
  return (
    <MagnifyingGlass
  visible={true}
  height="40"
  width="40"
  ariaLabel="magnifying-glass-loading"
  wrapperStyle={{}}
  wrapperClass="magnifying-glass-wrapper"
  glassColor="#c0efff"
  color="#00ffe1"
  />
  )
}

export default Loader