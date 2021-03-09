/// <reference types="react" />
import { IStep, Labels } from '../types';
export interface TopLayerProps {
    isFirstStep?: boolean;
    isLastStep?: boolean;
    currentStep: IStep;
    stepsNumber?: number;
    labels?: Labels;
    handlersProps?: any;
    handleNext?(): void;
    handlePrev?(): void;
    handleStop?(): void;
}
export declare const TopLayer: () => JSX.Element;
