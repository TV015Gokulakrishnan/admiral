import React from 'react';
import type { InputProps } from '../../ui/Input/interfaces';
import { FormItemProps } from '../Item';
import { InputComponentWithName } from '../interfaces';
export interface PasswordInputProps extends InputProps, FormItemProps {
    name: string;
}
export declare const PasswordInput: InputComponentWithName<React.FC<PasswordInputProps>>;
