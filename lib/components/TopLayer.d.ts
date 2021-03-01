import { IStep, Labels } from '../types';
export interface TopLayerProps {
    isFirstStep?: boolean;
    isLastStep?: boolean;
    currentStep: IStep;
    stepsNumber?: number;
    labels?: Labels;
    handleNext?(): void;
    handlePrev?(): void;
    handleStop?(): void;
}
