import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function SwitchFeatureCategory({ label }) {
  const [isSwitchOn, setIsSwitchOn] = useState(false)

  const handleToggle = () => {
    setIsSwitchOn(prev => !prev)

    if (!isSwitchOn) {
      toast.success(`${label} is now ON!`)
    } else {
      toast.info(`${label} is now OFF!`)
    }
  }
  return (
    <div>
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={isSwitchOn}
          onChange={handleToggle}
          className="hidden"
        />
        <span
          className={`relative w-10 h-5  rounded-full transition-colors ${
            isSwitchOn ? 'bg-green-500' : 'bg-gray-300'
          }`}
        >
          <span
            className={`absolute w-4 h-4 mt-[2px] bg-white rounded-full transition-transform transform ${
              isSwitchOn ? 'translate-x-5' : 'translate-x-1'
            }`}
          />
        </span>
        <span>{isSwitchOn}</span>
      </label>
    </div>
  )
}
