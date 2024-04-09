type ButtonProps = {
  nextUri: string;
  isDisabled: boolean;
  callback: (n: string) => void;
};

export const NextButton = ({ nextUri, isDisabled, callback }: ButtonProps) => {
  return (
    <section className="next-button-container">
      <button
        className="next-button"
        onClick={() => callback(nextUri)}
        disabled={isDisabled}
      >
        CONTINUE
      </button>
    </section>
  );
};
