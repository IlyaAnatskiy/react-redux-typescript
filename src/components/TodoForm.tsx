import React from 'react';

interface TodoFormProps {
  onAdd(title: string): void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const ref = React.useRef<HTMLInputElement>(null);

  const clickHandler = () => {
    onAdd(ref.current!.value);
    ref.current!.value = '';
  };

  return (
    <div className="input-field mt2 flex">
      <input ref={ref} className="w80" type="text" id="title" placeholder="Введите название дела" />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
      <a className="wwaves-effect waves-light btn brown darken-2 w20" onClick={clickHandler}>
        Добавить
      </a>
    </div>
  );
};

export default TodoForm;
