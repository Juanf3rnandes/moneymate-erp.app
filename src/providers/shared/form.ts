import React from "react";
import { isEqual } from "../utils/object";

/**
 * Type return of useForm Hook
 */
export interface Form<T> {
  /** current value of form */
  value: T;
  /** set value of field */
  set: (
    field: keyof T,
    options?: FormSetterOptions
  ) => (value: T[keyof T]) => void;
  /** set more fields, keep others fields */
  setAll: (value: Partial<T>, options?: FormSetterOptions) => void;
  /** reset fields, can ignores any field and set field same time */
  reset: (ignores?: (keyof T)[], value?: Partial<T>) => void;
  /** return by validator */
  isValid: boolean;
  /** return true if change any field */
  hasChanges: boolean;
  /** count changes fields, can custom compare fields */
  count(compare?: (key: keyof T) => boolean): number;
  /** return true if field never changed, can custom validation */
  pristine(key?: keyof T | (keyof T)[] | ((a: T, b: T) => boolean)): boolean;
  /** mark hasChanges to false */
  markNoChanges(): void;
}

interface FormSetterOptions {
  noMarkChange?: boolean;
}

/**
 * Create state to use in forms
 * @param initial Object
 * @param validator Function
 * @return Form
 */
export function useForm<T extends object>(
  initial?: T,
  validator?: (form: T) => boolean
): Form<T> {
  const [form, setForm] = React.useState<T>(initial as T);
  const [hasChanges, setHasChanges] = React.useState(false);

  const isValid = React.useMemo(() => {
    if (validator) {
      return validator(form);
    }
    return true;
  }, [form, validator]);

  function set(field: keyof T, options?: FormSetterOptions) {
    return (value: T[keyof T]) => {
      setForm((v) => ({ ...v, [field]: value }));
      if (!options?.noMarkChange) {
        setHasChanges(true);
      }
    };
  }

  function setAll(value: Partial<T>, options?: FormSetterOptions) {
    setForm((v) => ({ ...v, ...value }));
    if (!options?.noMarkChange) {
      setHasChanges(true);
    }
  }

  function reset(ignores?: (keyof T)[], value?: Partial<T>) {
    if (ignores && initial) {
      setForm((f) =>
        Object.keys(f).reduce((newForm, key) => {
          const typedKey = key as keyof T;
          if (!ignores.includes(typedKey)) {
            newForm[typedKey] = initial[typedKey];
          }
          if (value && value[typedKey] !== undefined) {
            newForm[typedKey] = value[typedKey] as T[keyof T];
          }
          return newForm;
        }, {} as T)
      );
    } else {
      setForm({ ...initial, ...value } as T);
    }
  }

  function count(compare?: (key: keyof T) => boolean) {
    return Object.keys(form).filter((key) =>
      compare ? compare(key as keyof T) : !!form[key as keyof T]
    ).length;
  }

  function pristine(key?: keyof T | (keyof T)[] | ((a: T, b: T) => boolean)) {
    if (!initial) return false;
    if (Array.isArray(key)) {
      return key.every((k) => form[k] === initial[k]);
    }
    if (typeof key === "function") {
      return key(initial, form);
    }
    if (key) {
      return form[key] === initial[key];
    }
    return isEqual(form, initial);
  }

  function markNoChanges() {
    setHasChanges(false);
  }

  return {
    value: form,
    set,
    setAll,
    reset,
    isValid,
    hasChanges,
    count,
    pristine,
    markNoChanges,
  };
}

export function useFormMock<T = any, F = Form<Partial<T>>>(
  props?: Partial<F> & {
    spySet?: CallableFunction;
    spySetAll?: CallableFunction;
    spyReset?: CallableFunction;
    spyCount?: CallableFunction;
    spyPristine?: CallableFunction;
  }
) {
  const emptyFn = new Function();
  return {
    value: {},
    set: props?.spySet || emptyFn,
    setAll: props?.spySetAll || emptyFn,
    reset: props?.spyReset || emptyFn,
    count: props?.spyCount || emptyFn,
    pristine: props?.spyPristine || emptyFn,
    isValid: true,
    hasChanges: true,
    ...props,
  } as unknown as F;
}
