//! .d.ts uzantili dosyalari TS global alan olarak görüyor.


interface TodoType {
    todo:string;
    isDone: boolean;
    id: string | number;
}

type AddFn = (text:string) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;
type ToggleFn = (todo: TodoType) => Promise<void>;