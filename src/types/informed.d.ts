import informed from 'informed';
import * as React from 'react';

declare module 'informed' {
  export interface ArrayFieldProps extends informed.ArrayFieldProps {
    initialValue: any;
    children?: any;
  }

  export interface ArrayFieldReturnPropParameters
    extends informed.ArrayFieldReturnPropParameters {
    fields: Array<ArrayFieldProps>;
  }

  export function useArrayField(
    params: informed.useArrayFieldParams
  ): ArrayFieldReturnPropParameters;

  export interface FormApi<V = FormValues> extends informed.FormApi<V> {
    emitter: any;
    getFullField: (field: string) => string;
    getInitialValue: (field: string) => any;
    setValue: <T extends keyof V>(field: T, value: V[T]) => void;
    validateField: <T extends keyof V>(field: T) => void;
  }

  // eslint-disable-next-line
  export interface FieldContext<V = informed.FormValue>
    extends informed.FieldContext {
    forwardedRef: React.RefObject<any>;
    userProps: any;
    debug: boolean;
  }

  export interface FieldProps<V = informed.FormValue, VS = any>
    extends informed.FieldProps<V, VS> {
    validate?: (value: V | undefined, values: VS) => informed.FormError;
    debug?: boolean;
    shadow?: boolean;
  }

  export interface useArrayFieldParams
    extends informed.useArrayFieldParams,
      FieldProps {
    validate?: (value: any, values: any, length: number) => string | void;
  }

  export function asField<P, V = informed.FormValue>(
    component: React.ComponentType<FieldContext<V> & P>
  ): React.ComponentType<FieldProps<V, any> & P>;

  export function useFormApi<V = informed.FormValues>(): FormApi<V>;

  export function useField<V = informed.FormValue, VS = any>(
    fieldProps?: FieldProps<V, VS>
  ): informed.FieldContext<V>;

  export type FormProps<V = informed.FormValues> =
    informed.ChildrenFormProps<V>;

  export class Form<V = informed.FormValues> extends React.Component<
    FormProps<V>
  > {}

  export class Multistep<V = informed.FormValues> extends React.Component<
    FormProps<V> & { initialStep: string }
  > {}

  declare namespace Multistep {
    export class Step<V = informed.FormValues> extends React.Component<
      FormProps<V> & { step: string; previous?: string; next?: string }
    > {}
  }

  export function useMultistepApi<V = informed.FormValues>(): FormApi<V>;

  export function useMultistepState<V = informed.FormValues>(): FormApi<V> & {
    current: string;
  };
}
