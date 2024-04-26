import { CustonButtonProps } from "@/types"

export function CustonButton({ title, containerStyles, handleClick }: CustonButtonProps ) {
  return (
    <button 
        disabled={false}
        type="button"
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}>
        <span className="flex-">
               {title}
        </span>
    </button>
  )
}
