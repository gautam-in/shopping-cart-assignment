import React from "react"
export interface ModalProps {
  show: boolean
  title: React.ReactNode | string
  actionText?: React.ReactNode | string
  footerText?: React.ReactNode | string
  classes?: string
  onClose: () => void
  children: React.ReactNode
}
