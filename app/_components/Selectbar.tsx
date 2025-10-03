import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Selectbar() {
  return (
    <Select>
      <SelectTrigger className="w-[119px] text-white text-[16px] font-medium ">
        <SelectValue
          className="text-white font-medium text-[16px]"
          placeholder="Units"
        />
      </SelectTrigger>
      <SelectContent className="bg-[#262540]">
        <SelectGroup>
          <SelectLabel className="text-white text-[16px] font-medium ">
            Fruits
          </SelectLabel>
          <SelectItem
            className="text-white text-[16px] font-medium "
            value="apple"
          >
            Apple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
