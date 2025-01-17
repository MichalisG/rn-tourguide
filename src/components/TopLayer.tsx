import React from 'react'
import { IStep, Labels } from '../types'

export interface TopLayerProps {
  isFirstStep?: boolean
  isLastStep?: boolean
  currentStep: IStep
  stepsNumber?: number
  labels?: Labels
  handlersProps?: any
  handleNext?(): void
  handlePrev?(): void
  handleStop?(): void
}

// Use this component to render anything on top of the page
export const TopLayer = () => <></>
