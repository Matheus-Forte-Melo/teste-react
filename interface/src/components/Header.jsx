import { User, Bell } from "lucide-react"

function Header() {
    return (
        <header class="w-full flex justify-between bg-bg-header">
            <div class="p-4 text-center w-64 bg-gray-400"><small>Logo</small></div>
            <div class="flex gap-2 mr-2 mb-1 mt-1">
                <div class="border-2 border-header-icones -400 w-16 h-16 rounded-full flex items-center justify-center">
                    <Bell className="stroke-header-icones" size={48} strokeWidth={1}/>
                </div>
                <div class="border-2 border-header-icones -400 w-16 h-16 rounded-full flex items-center justify-center">
                    <User className="stroke-header-icones" size={48} strokeWidth={1}/>
                </div>
            </div>
        </header>
    )
}

export default Header
