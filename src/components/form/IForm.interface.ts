export default interface IForm {
  onDataChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  userTimeInput: Date;
  onDateChange: (number: number) => void;
  color: string;
}
