import * as React from 'react';
import { Animated, LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import { BorderRadiusObject, IStep, Labels, ValueXY } from '../types';
import { TooltipProps } from './Tooltip';
import { TopLayerProps } from './TopLayer';
export interface ModalProps {
    ref: any;
    currentStep?: IStep;
    visible?: boolean;
    isFirstStep: boolean;
    isLastStep: boolean;
    animationDuration?: number;
    tooltipComponent: React.ComponentType<TooltipProps>;
    tooltipStyle?: StyleProp<ViewStyle>;
    topLayerComponent: React.ComponentType<TopLayerProps>;
    topLayerStyle?: StyleProp<ViewStyle>;
    maskOffset?: number;
    borderRadius?: number;
    stepsNumber?: number;
    borderRadiusObject?: BorderRadiusObject;
    androidStatusBarVisible: boolean;
    backdropColor: string;
    labels: Labels;
    handlersProps?: any;
    onNext?: void;
    onPrev?: void;
    easing(value: number): number;
    stop(): void;
    next(): void;
    prev(): void;
}
interface Layout {
    x?: number;
    y?: number;
    width?: number;
    height?: number;
}
interface State {
    tooltip: object;
    notAnimated?: boolean;
    containerVisible: boolean;
    layout?: Layout;
    size?: ValueXY;
    position?: ValueXY;
    tooltipTranslateY: Animated.Value;
    opacity: Animated.Value;
}
interface Move {
    top: number;
    left: number;
    width: number;
    height: number;
}
export declare class Modal extends React.Component<ModalProps, State> {
    static defaultProps: {
        easing: import("react-native").EasingFunction;
        animationDuration: number;
        tooltipComponent: any;
        topLayerComponent: any;
        tooltipStyle: {};
        androidStatusBarVisible: boolean;
        backdropColor: string;
        labels: {};
        stepsNumber: number;
    };
    layout?: Layout;
    state: {
        tooltip: {};
        containerVisible: boolean;
        tooltipTranslateY: Animated.Value;
        opacity: Animated.Value;
        layout: undefined;
        size: undefined;
        position: undefined;
    };
    constructor(props: ModalProps);
    componentDidUpdate(prevProps: ModalProps): void;
    handleLayoutChange: ({ nativeEvent: { layout } }: LayoutChangeEvent) => void;
    measure(): Promise<Layout>;
    _animateMove(obj?: Move): Promise<void>;
    animateMove(obj?: {}): Promise<void>;
    reset(): void;
    handleNext: () => void;
    handlePrev: () => void;
    handleStop: () => void;
    renderMask: () => JSX.Element;
    renderTooltip(): JSX.Element | null;
    renderTopLayer(): JSX.Element | null;
    render(): JSX.Element | null;
}
export {};
