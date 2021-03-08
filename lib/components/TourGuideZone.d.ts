import * as React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, Shape } from '../types';
export interface TourGuideZoneProps {
    zone: number;
    isTourGuide?: boolean;
    text?: string;
    shape?: Shape;
    maskOffset?: number;
    borderRadius?: number;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    keepTooltipPosition?: boolean;
    tooltipBottomOffset?: number;
    borderRadiusObject?: BorderRadiusObject;
    tooltipBody?: any;
    onNext?: void;
    onPrev?: void;
}
export declare const TourGuideZone: ({ isTourGuide, zone, children, shape, text, maskOffset, borderRadius, style, keepTooltipPosition, tooltipBottomOffset, borderRadiusObject, tooltipBody, onNext, onPrev }: TourGuideZoneProps) => JSX.Element;
