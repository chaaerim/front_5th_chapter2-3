import { Button, Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../../shared/ui"
import { usePagination } from "../model/usePagination"

interface PaginationProps {
  total: number
}

const LIMIT_OPTIONS = [10, 20, 30]

export const Pagination = ({ total }: PaginationProps) => {
  const { skip, limit, setSkip, setLimit } = usePagination()

  const handleLimitChange = (value: string) => {
    setLimit(Number(value))
  }

  const handlePrevButtonClick = () => {
    setSkip(Math.max(0, skip - limit))
  }

  const handleNextButtonClick = () => {
    setSkip(skip + limit)
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span>표시</span>
        <Select value={limit.toString()} onValueChange={(value) => handleLimitChange(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            {LIMIT_OPTIONS.map((option) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span>항목</span>
      </div>
      <div className="flex gap-2">
        <Button disabled={skip === 0} onClick={() => handlePrevButtonClick()}>
          이전
        </Button>
        <Button disabled={skip + limit >= total} onClick={() => handleNextButtonClick()}>
          다음
        </Button>
      </div>
    </div>
  )
}
