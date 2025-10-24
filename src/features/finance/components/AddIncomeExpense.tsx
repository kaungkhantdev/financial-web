import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

const AddIncomeExpense = () => {
  return (
       <Dialog>
        <DialogTrigger asChild>
            <Button>Add Income</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-xl">
            <DialogHeader className="pb-4 border-b">
                <DialogTitle>Add Income OR Expense</DialogTitle>
            </DialogHeader>
            <div className={cn("flex flex-col gap-6",)}>
                <div>
                    <form>
                        <div className="flex flex-col gap-6">
                            {/* income or expense  */}
                            <div className="grid gap-3">
                                <RadioGroup className="flex flex-col flex-wrap lg:flex-row">
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="light" 
                                            id="r1"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Income</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="dark" 
                                            id="r2"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Expense</h1>
                                            </div>
                                    </Label>
                                </RadioGroup>
                            </div>
                           <div className="grid grid-cols-2 gap-6 w-full">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Title</Label>
                                    <Input
                                        id="name"
                                        placeholder="Title"
                                        required
                                    />
                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email">Amount</Label>
                                    <Input
                                        id="email"
                                        placeholder="0.00"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="des">Description</Label>
                                <Textarea id="des" 
                                    className="max-h-40"
                                    placeholder="Write your description."/>
                            </div>
                            {/* banks  */}
                            <div className="grid gap-3">
                                <Label>Select Wallet</Label>
                                <RadioGroup className="flex flex-col overflow-auto lg:flex-row">
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="light" 
                                            id="r1"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">K Bank</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="dark" 
                                            id="r2"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">AYA Bk</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="system" 
                                            id="r3"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Wallet</h1>
                                            </div>
                                    </Label>
                                    <div>
                                        <Dialog>
                                            <form>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size={'lg'}>Add New</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Add Bank</DialogTitle>
                                                    <DialogDescription>
                                                    Make changes to your profile here. Click save when you&apos;re
                                                    done.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4">
                                                    <div className="grid gap-3">
                                                        <Label htmlFor="name-1">Name</Label>
                                                        <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                                    </div>
                                                    <div className="grid gap-3">
                                                        <Label htmlFor="name-1">Amount</Label>
                                                        <Input id="name-1" name="name" defaultValue="2000" />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                    <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="submit">Confirm</Button>
                                                </DialogFooter>
                                                </DialogContent>
                                            </form>
                                        </Dialog>
                                    </div>
                                </RadioGroup>
                            </div>

                            {/* categories  */}
                            <div className="grid gap-3">
                                <Label>Select Categories</Label>
                                <RadioGroup className="flex flex-col overflow-auto lg:flex-row">
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="light" 
                                            id="r1"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Food & Drinks</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="dark" 
                                            id="r2"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Bills & Fees</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="system" 
                                            id="r3"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Transport</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="light" 
                                            id="r1"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Food & Drinks</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="dark" 
                                            id="r2"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Bills & Fees</h1>
                                            </div>
                                    </Label>
                                    <Label className="cursor-pointer has-[[data-state=checked]]:border-ring has-[[data-state=checked]]:bg-primary/5 flex items-start gap-3 rounded-lg border p-3">
                                        <RadioGroupItem
                                            value="system" 
                                            id="r3"
                                            className="data-[state=checked]:border-primary"
                                        />
                                            <div>
                                                <h1 className=" w-24">Transport</h1>
                                            </div>
                                    </Label>
                                    <div>
                                        <Dialog>
                                            <form>
                                                <DialogTrigger asChild>
                                                    <Button variant="outline" size={'lg'}>Add New</Button>
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                <DialogHeader>
                                                    <DialogTitle>Add Category</DialogTitle>
                                                    <DialogDescription>
                                                    Make changes to your profile here. Click save when you&apos;re
                                                    done.
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-4">
                                                    <div className="grid gap-3">
                                                    <Label htmlFor="name-1">Name</Label>
                                                    <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                                                    </div>
                                                </div>
                                                <DialogFooter>
                                                    <DialogClose asChild>
                                                    <Button variant="outline">Cancel</Button>
                                                    </DialogClose>
                                                    <Button type="submit">Confirm</Button>
                                                </DialogFooter>
                                                </DialogContent>
                                            </form>
                                        </Dialog>
                                    </div>
                                </RadioGroup>
                            </div>
                            
                            <div className=" justify-end flex gap-3">
                                <DialogClose asChild>
                                    <Button type="button" variant={'outline'} size={'lg'}>
                                    Cancel
                                    </Button>
                                </DialogClose>
                                <Button type="submit" size={'lg'}>
                                    Confirm
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </DialogContent>
    </Dialog>

  )
}

export default AddIncomeExpense