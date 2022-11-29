import { selectFloodData, selectFloodFeatureItems, selectFloodUpdated } from "app/selectors/homeSelectors"
import { useSelector } from "react-redux"

export const useFloodData = () => {
  return useSelector(selectFloodData)
}
export const useFloodFeatureItems = () => {
  return useSelector(selectFloodFeatureItems)
}
export const useFloodDataUpdated = () => {
  return useSelector(selectFloodUpdated)
}
