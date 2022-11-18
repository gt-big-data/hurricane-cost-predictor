import { useMapContext } from "react-simple-maps"

const CustomPoint = () => {
  const { projection } = useMapContext()
  const [x, y] = projection([151.21, -33.87])
  return <circle cx={x} cy={y} r={10} fill="#06F" />
}