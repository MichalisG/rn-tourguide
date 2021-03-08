import * as React from 'react';
import { IStep, Labels } from '../types';
export interface TooltipProps {
    isFirstStep?: boolean;
    isLastStep?: boolean;
    currentStep: IStep;
    stepsNumber?: number;
    labels?: Labels;
    tooltipTranslateY: any;
    tooltip: any;
    tooltipBody?: React.ReactNode;
    onNext?: void;
    onPrev?: void;
    handleNext?(): void;
    handlePrev?(): void;
    handleStop?(): void;
}
export declare const Tooltip: ({ isFirstStep, isLastStep, handleNext, handlePrev, handleStop, currentStep, labels, }: TooltipProps) => JSX.Element;
