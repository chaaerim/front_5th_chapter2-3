import * as React from "react"
import { forwardRef } from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { Check, ChevronDown, X } from "lucide-react"

// 카드 컴포넌트
Card.displayName = "Card"

CardTitle.displayName = "CardTitle"

CardContent.displayName = "CardContent".displayName = "Textarea"

// 선택 컴포넌트
export const Select = SelectPrimitive.Root
export const SelectGroup = SelectPrimitive.Group
export const SelectValue = SelectPrimitive.Value

SelectContent.displayName = SelectPrimitive.Content.displayName

SelectItem.displayName = SelectPrimitive.Item.displayName

// 대화상자 컴포넌트
export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogPortal = DialogPrimitive.Portal
export const DialogOverlay = DialogPrimitive.Overlay

DialogContent.displayName = DialogPrimitive.Content.displayName

DialogHeader.displayName = "DialogHeader"

DialogTitle.displayName = DialogPrimitive.Title.displayName

// 테이블 컴포넌트

Table.displayName = "Table"

TableHeader.displayName = "TableHeader"

TableBody.displayName = "TableBody"

TableRow.displayName = "TableRow"

TableHead.displayName = "TableHead"

TableCell.displayName = "TableCell"
