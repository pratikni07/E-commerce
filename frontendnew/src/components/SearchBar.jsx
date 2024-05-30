import {
    Shirt,
    SquareGanttChart,
    Layers2,
    Footprints,
    Grip,
    User,
  } from "lucide-react"
  
  import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
  export function SearchBar() {
    return (
      <Command className="rounded-lg border shadow-md">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <SquareGanttChart  className="mr-2 h-4 w-4" />
              <span>Category</span>
            </CommandItem>
            <CommandItem>
              <Layers2  className="mr-2 h-4 w-4" />
              <span>SubCategory</span>
            </CommandItem>
            <CommandItem>
              <Shirt  className="mr-2 h-4 w-4" />
              <span>Shirts</span>
            </CommandItem>
            
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup 
          heading="Popular"
          >
            <CommandItem>
              <Footprints  className="mr-2 h-4 w-4" />
              <span>Nike Shoes</span>
              {/* <CommandShortcut>⌘P</CommandShortcut> */}
            </CommandItem>
            <CommandItem>
              <Grip  className="mr-2 h-4 w-4" />
              <span>Top Selling Products</span>
              {/* <CommandShortcut>⌘B</CommandShortcut> */}
            </CommandItem>
            
          </CommandGroup>
        </CommandList>
      </Command>
    )
  }
  