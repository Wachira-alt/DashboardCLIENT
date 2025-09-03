import React from "react"
import { Button } from "@/components/ui/button"
import { FcGoogle } from "react-icons/fc"

const GoogleAuthButton = ({ label = "Sign in with Google", onClick }) => {
  return (
    <Button
      type="button"
      variant="outline"
      className="w-full flex gap-2 items-center justify-center"
      onClick={onClick || (() => console.log("Google button clicked"))}
    >
      <FcGoogle className="w-5 h-5" />
      {label}
    </Button>
  )
}

export default GoogleAuthButton
