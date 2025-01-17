import * as React from 'react';
import { BorderRadiusObject, Shape } from '../types';
interface Props {
    name: string;
    order: number;
    text: string;
    shape?: Shape;
    active?: boolean;
    maskOffset?: number;
    borderRadius?: number;
    children: React.ReactNode;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    borderRadiusObject?: BorderRadiusObject;
    handlersProps?: any;
    onNext?: void;
    onPrev?: void;
}
export declare const Step: (props: Props) => JSX.Element;
export {};
